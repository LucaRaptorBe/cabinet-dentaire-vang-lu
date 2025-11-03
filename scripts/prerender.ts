import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';

// Routes à pré-générer pour le SEO
const routes = [
  { path: '/', outputPath: 'index.html' },
  { path: '/a-propos', outputPath: 'a-propos/index.html' },
  { path: '/rendez-vous', outputPath: 'rendez-vous/index.html' },
];

const PREVIEW_PORT = 4173;
const PREVIEW_URL = `http://localhost:${PREVIEW_PORT}`;
const DIST_PATH = path.resolve(process.cwd(), 'dist');

// Lance le serveur preview Vite
function startPreviewServer(): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting preview server...\n');

    const server = spawn('npx', ['vite', 'preview', '--port', PREVIEW_PORT.toString()], {
      stdio: 'pipe',
    });

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('localhost')) {
        console.log('✅ Preview server ready!\n');
        setTimeout(() => resolve(server), 1000); // Attendre 1s supplémentaire
      }
    });

    server.stderr.on('data', (data) => {
      console.error('Server error:', data.toString());
    });

    server.on('error', reject);
  });
}

// Prerender une route spécifique
async function prerenderRoute(
  page: Page,
  route: { path: string; outputPath: string }
): Promise<void> {
  try {
    console.log(`📄 Prerendering ${route.path}...`);

    // Naviguer vers la route
    await page.goto(`${PREVIEW_URL}${route.path}`, {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    // Attendre que React soit complètement hydraté
    await page.waitForTimeout(2000);

    // Attendre que le contenu principal soit visible
    await page.waitForSelector('#root', { timeout: 10000 });

    // Attendre que i18next ait chargé les traductions
    await page.waitForTimeout(1000);

    // Récupérer le HTML complet
    const html = await page.content();

    // Nettoyer le HTML et ajouter des améliorations SEO
    const cleanedHtml = cleanHtml(html);

    // Écrire le fichier HTML
    const outputPath = path.join(DIST_PATH, route.outputPath);
    const outputDir = path.dirname(outputPath);

    // Créer le dossier si nécessaire
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, cleanedHtml, 'utf-8');
    console.log(`✅ Created ${route.outputPath}\n`);
  } catch (error) {
    console.error(`❌ Error prerendering ${route.path}:`, error);
    throw error;
  }
}

// Nettoie et optimise le HTML généré
function cleanHtml(html: string): string {
  return html
    // Ajouter attribut lang si manquant
    .replace(/<html>/gi, '<html lang="fr">')
    // S'assurer que le charset est en premier
    .replace(/<head>/gi, '<head>\n    <meta charset="UTF-8" />')
    // Enlever les commentaires inutiles
    .replace(/<!--[\s\S]*?-->/g, '')
    // Nettoyer les espaces multiples
    .replace(/\n\s*\n/g, '\n');
}

// Main prerendering function
async function prerender() {
  let browser: Browser | null = null;
  let server: any = null;

  try {
    console.log('🎨 Cabinet Dentaire Vang - Prerendering for SEO\n');
    console.log('================================================\n');

    // Vérifier que dist existe
    if (!fs.existsSync(DIST_PATH)) {
      console.error('❌ dist folder not found. Run "npm run build" first.');
      process.exit(1);
    }

    // Lancer le serveur preview
    server = await startPreviewServer();

    // Lancer Playwright
    console.log('🌐 Starting browser...\n');
    browser = await chromium.launch({
      headless: true,
    });

    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    });

    const page = await context.newPage();

    // Prerender chaque route
    for (const route of routes) {
      await prerenderRoute(page, route);
    }

    await browser.close();

    console.log('================================================\n');
    console.log('✨ Prerendering complete!\n');
    console.log('📊 Summary:');
    console.log(`   - Routes processed: ${routes.length}`);
    console.log(`   - Output directory: ${DIST_PATH}`);
    console.log('\n💡 The HTML now contains full content for SEO crawlers!\n');

  } catch (error) {
    console.error('\n❌ Prerendering failed:', error);
    process.exit(1);
  } finally {
    // Nettoyer
    if (browser) {
      await browser.close();
    }
    if (server) {
      server.kill();
    }
  }
}

// Exécuter le prerendering
prerender().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
