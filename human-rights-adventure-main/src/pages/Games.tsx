import { useState } from "react";
import { motion } from "framer-motion";
import QuizGame from "@/components/QuizGame";
import MatchingGame from "@/components/MatchingGame";
import Navbar from "@/components/Navbar";
import LanguageToggle from "@/components/LanguageToggle";
import SiteFooter from "@/components/SiteFooter";
import { tr, getLangDir, type LangCode } from "@/lib/translations";
import gamesIcon from "@/assets/games-icon.png";

const Games = () => {
  const [lang, setLang] = useState<LangCode>("en");

  return (
    <div dir={getLangDir(lang)}>
      <Navbar lang={lang} />
      <LanguageToggle lang={lang} onSetLang={setLang} />

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.img
            src={gamesIcon}
            alt="Games"
            className="w-24 h-24 mx-auto mb-6"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🎮 {tr("gamesPageTitle", lang)}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {tr("gamesPageSubtitle", lang)}
          </motion.p>
        </div>
      </section>

      {/* Matching Game */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <MatchingGame lang={lang} />
        </div>
      </section>

      {/* Quiz */}
      <QuizGame lang={lang} />

      <SiteFooter lang={lang} />
    </div>
  );
};

export default Games;
