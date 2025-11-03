import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1 border border-border rounded-md p-1">
        <button
          onClick={() => changeLanguage('fr')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            i18n.language === 'fr'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            i18n.language === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
