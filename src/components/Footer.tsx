import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(['footer', 'common']);

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">{t('siteName', { ns: 'common' })}</h3>
            <p className="text-sm text-muted-foreground">
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('sections.contact')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+352 26 26 20 46</p>
              <p>dentiste1510@gmail.com</p>
              <p>19 Avenue de la Faïencerie</p>
              <p>L-1510 Limpertsberg</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('sections.hours')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="grid grid-cols-[5rem_auto]">
                <p>{t('hours.weekdays.days')}</p>
                <p>{t('hours.weekdays.time')}</p>
              </div>
              <div className="grid grid-cols-[5rem_auto]">
                <p>{t('hours.saturday.days')}</p>
                <p>{t('hours.saturday.time')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
