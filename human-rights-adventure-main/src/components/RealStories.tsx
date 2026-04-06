import { motion } from "framer-motion";
import { tr, type LangCode } from "@/lib/translations";

interface RealStoriesProps {
  lang: LangCode;
}

const stories = [
  { emoji: "✏️", titleKey: "malalaTitle", descKey: "malalaDesc", color: "border-ocean", bg: "bg-ocean/5" },
  { emoji: "🌍", titleKey: "cleanWaterTitle", descKey: "cleanWaterDesc", color: "border-mint", bg: "bg-mint/5" },
  { emoji: "🎨", titleKey: "artRightsTitle", descKey: "artRightsDesc", color: "border-lavender", bg: "bg-lavender/5" },
];

const RealStories = ({ lang }: RealStoriesProps) => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {tr("inspiringStories", lang)}
          </h2>
          <p className="text-lg text-muted-foreground">{tr("realPeopleDifference", lang)}</p>
        </motion.div>

        <div className="space-y-6">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              className={`${story.bg} border-l-4 ${story.color} rounded-2xl p-8 shadow-sm`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl shrink-0">{story.emoji}</span>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{tr(story.titleKey, lang)}</h3>
                  <p className="text-foreground/80 leading-relaxed font-body">{tr(story.descKey, lang)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealStories;
