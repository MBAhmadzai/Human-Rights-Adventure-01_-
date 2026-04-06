import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { LANGUAGES, type LangCode } from "@/lib/translations";

interface LanguageToggleProps {
  lang: LangCode;
  onSetLang: (lang: LangCode) => void;
}

const LanguageToggle = ({ lang, onSetLang }: LanguageToggleProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="fixed top-20 right-4 z-50">
      <motion.button
        className="bg-card shadow-lg rounded-full px-4 py-2 flex items-center gap-2 border border-border font-display text-sm text-foreground"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        {current.name}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full right-0 mt-2 bg-card border border-border rounded-2xl shadow-xl overflow-hidden max-h-80 overflow-y-auto w-48"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                className={`w-full text-left px-4 py-2.5 text-sm font-body hover:bg-muted transition-colors flex items-center justify-between ${
                  l.code === lang ? "bg-primary/10 text-primary font-bold" : "text-foreground"
                }`}
                onClick={() => {
                  onSetLang(l.code);
                  setOpen(false);
                }}
              >
                {l.name}
                {l.code === lang && <span className="text-primary">✓</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
