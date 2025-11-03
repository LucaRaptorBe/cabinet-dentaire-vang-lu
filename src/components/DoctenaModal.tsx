import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

interface DoctenaModalProps {
  doctor: {
    name: string;
    eid: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const DoctenaModal = ({ doctor, isOpen, onClose }: DoctenaModalProps) => {
  const { t, i18n } = useTranslation("booking");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && doctor) {
      // Remove any existing Doctena script
      const existingScript = document.querySelector('script[src*="doctena.lu"]');
      if (existingScript) {
        existingScript.remove();
        setScriptLoaded(false);
      }

      // Load Doctena script after modal is open and DOM is ready
      const script = document.createElement("script");
      script.src = "https://api.doctena.lu/js/widgetBooking/calendar/build.php";
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup: remove script when modal closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen, doctor]);

  if (!doctor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl">
            {t("booking.for")} <span className="text-primary">{doctor.name}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <div className="bg-white rounded-lg p-4 min-h-[400px]">
            <section
              data-toggle="doc-calendar"
              data-picture="1"
              data-doctor-eid={doctor.eid}
              data-language={i18n.language}
            ></section>
            {!scriptLoaded && (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Chargement du calendrier...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoctenaModal;
