import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { tr, type LangCode } from "@/lib/translations";
import { Link } from "react-router-dom";
import heroKids from "@/assets/hero-kids.png";

interface HeroSectionProps {
  lang: LangCode;
  onStart: () => void;
}

const HeroSection = ({ lang, onStart }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sunshine/20 blob blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/15 blob blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean/10 rounded-full blur-3xl" />

      {/* Sparkle decorations */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-foreground/30"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        >
          <Sparkles size={20 + i * 4} />
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Character illustration */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroKids}
            alt="Diverse children from around the world"
            width={600}
            height={300}
            className="mx-auto max-w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-primary-foreground mb-4 leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {tr("heroTitle", lang)}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {tr("heroSubtitle", lang)}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        >
          <motion.button
            onClick={onStart}
            className="bg-sunshine text-sunshine-foreground font-display text-xl md:text-2xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            {tr("startAdventure", lang)}
          </motion.button>

          <Link to="/games">
            <motion.div
              className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-display text-lg px-8 py-4 rounded-full border-2 border-primary-foreground/30 hover:bg-primary-foreground/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 {tr("navGames", lang)}
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
