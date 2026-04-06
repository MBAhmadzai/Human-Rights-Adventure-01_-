import { motion } from "framer-motion";
import { Heart, MessageCircle, Users, Sparkles } from "lucide-react";
import { tr, type LangCode } from "@/lib/translations";

interface CallToActionProps {
  lang: LangCode;
}

const actions = [
  { icon: Heart, titleKey: "beKindTitle", descKey: "beKindDesc", emoji: "💛" },
  { icon: MessageCircle, titleKey: "speakUpTitle", descKey: "speakUpDesc", emoji: "📢" },
  { icon: Users, titleKey: "includeEveryoneTitle", descKey: "includeEveryoneDesc", emoji: "🤗" },
  { icon: Sparkles, titleKey: "shareLearnTitle", descKey: "shareLearnDesc", emoji: "✨" },
];

const CallToAction = ({ lang }: CallToActionProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-hero text-primary-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{tr("howCanYouHelp", lang)}</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">{tr("neverTooYoung", lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <motion.div
              key={i}
              className="bg-card/15 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-4xl block mb-3">{action.emoji}</span>
              <h3 className="text-lg font-display font-bold mb-2">{tr(action.titleKey, lang)}</h3>
              <p className="text-sm opacity-80 font-body">{tr(action.descKey, lang)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
