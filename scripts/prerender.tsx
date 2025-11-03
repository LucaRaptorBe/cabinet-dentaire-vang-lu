import * as fs from 'fs';
import * as path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';

// Routes à pré-générer
const routes = [
  '/',
  '/a-propos',
  '/rendez-vous',
];

// Template HTML de base (sera rempli avec le contenu rendu)
function getHtmlTemplate(content: string, route: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cabinet Dentaire Vang | Dentiste à Limpertsberg, Luxembourg</title>
    <meta name="description" content="Cabinet dentaire moderne à Limpertsberg offrant des soins de qualité : implantologie, détartrage, traitement de caries. Équipe expérimentée multilingue. Prenez rendez-vous au +352 26 26 20 46" />
    <meta name="keywords" content="dentiste Luxembourg, cabinet dentaire Limpertsberg, implantologie, soins dentaires, dentiste multilingue" />
    <meta name="author" content="Cabinet Dentaire Vang" />

    <!-- Open Graph -->
    <meta property="og:title" content="Cabinet Dentaire Vang | Dentiste à Limpertsberg, Luxembourg" />
    <meta property="og:description" content="Cabinet dentaire moderne à Limpertsberg offrant des soins de qualité : implantologie, détartrage, traitement de caries. Équipe expérimentée multilingue." />
    <meta property="og:type" content="website" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Cabinet Dentaire Vang | Dentiste à Limpertsberg, Luxembourg" />
    <meta name="twitter:description" content="Cabinet dentaire moderne à Limpertsberg offrant des soins de qualité : implantologie, détartrage, traitement de caries." />
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

async function prerender() {
  console.log('🔨 Starting prerendering...\n');

  const distPath = path.resolve(process.cwd(), 'dist');

  // Vérifier que dist existe (doit être créé par vite build d'abord)
  if (!fs.existsSync(distPath)) {
    console.error('❌ dist folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  for (const route of routes) {
    try {
      console.log(`📄 Prerendering ${route}...`);

      // Import dynamique de l'App (après build)
      // Note: Cette approche simple nécessite quelques ajustements
      // Pour un vrai SSG, on devrait utiliser un bundler côté serveur

      // Pour l'instant, on va créer un fichier HTML de base
      // qui sera hydraté côté client (CSR avec SEO-friendly initial HTML)

      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const fullPath = path.join(distPath, routePath);

      // Créer le dossier si nécessaire
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Pour l'instant, copier le index.html de base
      // Dans une vraie implémentation SSG, on renderait le contenu React ici
      const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');
      fs.writeFileSync(fullPath, indexHtml);

      console.log(`✅ Created ${routePath}`);
    } catch (error) {
      console.error(`❌ Error prerendering ${route}:`, error);
    }
  }

  console.log('\n✨ Prerendering complete!');
}

prerender().catch(console.error);
