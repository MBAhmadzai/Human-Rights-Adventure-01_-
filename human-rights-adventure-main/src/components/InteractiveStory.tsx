import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { tr, type LangCode } from "@/lib/translations";
import storyAmira from "@/assets/story-amira.png";
import storyYoussef from "@/assets/story-youssef.png";

interface InteractiveStoryProps {
  lang: LangCode;
}

const scenarios = [
  {
    image: storyAmira,
    titleKey: "amiraTitle",
    storyKey: "amiraStory",
    choices: [
      { textKey: "amiraChoice1", correct: false, feedbackKey: "amiraFeedback1" },
      { textKey: "amiraChoice2", correct: true, feedbackKey: "amiraFeedback2" },
      { textKey: "amiraChoice3", correct: false, feedbackKey: "amiraFeedback3" },
    ],
  },
  {
    image: storyYoussef,
    titleKey: "youssefTitle",
    storyKey: "youssefStory",
    choices: [
      { textKey: "youssefChoice1", correct: false, feedbackKey: "youssefFeedback1" },
      { textKey: "youssefChoice2", correct: true, feedbackKey: "youssefFeedback2" },
      { textKey: "youssefChoice3", correct: false, feedbackKey: "youssefFeedback3" },
    ],
  },
];

const InteractiveStory = ({ lang }: InteractiveStoryProps) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const scenario = scenarios[currentScenario];

  const handleChoice = (idx: number) => {
    setSelectedChoice(idx);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setShowFeedback(false);
    setCurrentScenario((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {tr("interactiveStories", lang)}
          </h2>
          <p className="text-lg text-muted-foreground">
            {tr("whatWouldYouDo", lang)}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario}
            className="bg-card rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            {/* Character illustration */}
            <div className="bg-gradient-cool p-6 flex justify-center">
              <motion.img
                src={scenario.image}
                alt={tr(scenario.titleKey, lang)}
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
                loading="lazy"
                width={160}
                height={160}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {tr(scenario.titleKey, lang)}
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed font-body">
                  {tr(scenario.storyKey, lang)}
                </p>
              </div>

              <div className="space-y-3">
                {scenario.choices.map((choice, idx) => (
                  <motion.button
                    key={idx}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all font-body ${
                      selectedChoice === idx
                        ? choice.correct
                          ? "border-mint bg-mint/10"
                          : "border-accent bg-accent/10"
                        : "border-border hover:border-primary/50 bg-card"
                    }`}
                    onClick={() => !showFeedback && handleChoice(idx)}
                    whileHover={!showFeedback ? { scale: 1.01 } : {}}
                    whileTap={!showFeedback ? { scale: 0.99 } : {}}
                  >
                    <span className="text-foreground">
                      {tr(choice.textKey, lang)}
                    </span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {showFeedback && selectedChoice !== null && (
                  <motion.div
                    className={`mt-6 p-6 rounded-xl ${
                      scenario.choices[selectedChoice].correct
                        ? "bg-mint/15 border-2 border-mint"
                        : "bg-coral/15 border-2 border-coral"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-foreground font-body">
                      {tr(scenario.choices[selectedChoice].feedbackKey, lang)}
                    </p>
                    <motion.button
                      className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-full font-display"
                      onClick={handleNext}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tr("nextStory", lang)}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 gap-2">
          {scenarios.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentScenario ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStory;
