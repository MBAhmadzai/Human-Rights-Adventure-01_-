import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Shield, Heart, Users, Home, MessageCircle } from "lucide-react";
import { tr, type LangCode } from "@/lib/translations";

interface RightsSectionProps {
  lang: LangCode;
}

const rights = [
  { icon: BookOpen, color: "bg-ocean", titleKey: "rightEducationTitle", descKey: "rightEducationDesc", emoji: "📚" },
  { icon: Shield, color: "bg-mint", titleKey: "rightSafetyTitle", descKey: "rightSafetyDesc", emoji: "🛡️" },
  { icon: Heart, color: "bg-accent", titleKey: "rightHealthTitle", descKey: "rightHealthDesc", emoji: "❤️" },
  { icon: Users, color: "bg-lavender", titleKey: "rightEqualityTitle", descKey: "rightEqualityDesc", emoji: "🤝" },
  { icon: Home, color: "bg-coral", titleKey: "rightHomeTitle", descKey: "rightHomeDesc", emoji: "🏠" },
  { icon: MessageCircle, color: "bg-sunshine", titleKey: "rightSpeakTitle", descKey: "rightSpeakDesc", emoji: "💬" },
];

const RightsSection = ({ lang }: RightsSectionProps) => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {tr("whatAreHumanRights", lang)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tr("rightsDescription", lang)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right, i) => (
            <motion.div
              key={i}
              className="cursor-pointer perspective-1000"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <motion.div
                className={`relative rounded-2xl p-8 min-h-[220px] flex flex-col items-center justify-center text-center shadow-lg transition-colors ${
                  flipped === i ? right.color : "bg-card"
                }`}
                whileHover={{ scale: 1.03, y: -5 }}
                animate={{ rotateY: flipped === i ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {flipped === i ? (
                  <div style={{ transform: "rotateY(180deg)" }}>
                    <p className="text-primary-foreground font-body text-base leading-relaxed">
                      {tr(right.descKey, lang)}
                    </p>
                  </div>
                ) : (
                  <>
                    <span className="text-5xl mb-4">{right.emoji}</span>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {tr(right.titleKey, lang)}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {tr("clickToLearnMore", lang)}
                    </p>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightsSection;
