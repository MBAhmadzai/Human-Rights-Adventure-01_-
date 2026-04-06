import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, Trophy, CheckCircle, XCircle } from "lucide-react";
import { tr, type LangCode } from "@/lib/translations";

interface QuizGameProps {
  lang: LangCode;
}

const questions = [
  { questionKey: "q1", optionKeys: ["q1o1", "q1o2", "q1o3", "q1o4"], correct: 1 },
  { questionKey: "q2", optionKeys: ["q2o1", "q2o2", "q2o3", "q2o4"], correct: 2 },
  { questionKey: "q3", optionKeys: ["q3o1", "q3o2", "q3o3", "q3o4"], correct: 2 },
  { questionKey: "q4", optionKeys: ["q4o1", "q4o2", "q4o3", "q4o4"], correct: 1 },
];

const QuizGame = ({ lang }: QuizGameProps) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [stars, setStars] = useState<number[]>([]);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[current].correct) {
      setScore((s) => s + 1);
      setStars((s) => [...s, current]);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setFinished(false);
    setStars([]);
  };

  const progress = ((current + (answered ? 1 : 0)) / questions.length) * 100;

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {tr("quizTitle", lang)}
          </h2>
          <p className="text-lg text-muted-foreground">
            {tr("quizSubtitle", lang)}
          </p>
        </motion.div>

        {!finished ? (
          <motion.div className="bg-card rounded-3xl shadow-xl p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground font-body">
                  {tr("questionOf", lang, { current: current + 1, total: questions.length })}
                </span>
                <div className="flex gap-1">
                  {stars.map((_, i) => (
                    <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <Star className="w-5 h-5 fill-sunshine text-sunshine" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-cool rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  {tr(questions[current].questionKey, lang)}
                </h3>
                <div className="space-y-3">
                  {questions[current].optionKeys.map((optKey, idx) => {
                    const isCorrect = idx === questions[current].correct;
                    const isSelected = idx === selected;
                    return (
                      <motion.button
                        key={idx}
                        className={`w-full text-left p-4 rounded-xl border-2 flex items-center gap-3 transition-all font-body ${
                          answered
                            ? isCorrect ? "border-mint bg-mint/10" : isSelected ? "border-accent bg-accent/10" : "border-border opacity-50"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => handleAnswer(idx)}
                        whileHover={!answered ? { scale: 1.01 } : {}}
                        whileTap={!answered ? { scale: 0.99 } : {}}
                      >
                        {answered && isCorrect && <CheckCircle className="w-5 h-5 text-mint shrink-0" />}
                        {answered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-accent shrink-0" />}
                        <span className="text-foreground">{tr(optKey, lang)}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {answered && (
              <motion.div className="mt-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <motion.button
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-display text-lg"
                  onClick={handleNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {current < questions.length - 1 ? tr("nextQuestion", lang) : tr("seeResults", lang)}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="bg-card rounded-3xl shadow-xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
              <Trophy className="w-20 h-20 mx-auto text-sunshine fill-sunshine mb-4" />
            </motion.div>
            <h3 className="text-3xl font-display font-bold text-foreground mb-2">
              {score === questions.length ? tr("perfect", lang) : score >= questions.length / 2 ? tr("greatJob", lang) : tr("tryAgainMsg", lang)}
            </h3>
            <p className="text-xl text-muted-foreground mb-2">
              {tr("youGot", lang, { score, total: questions.length })}
            </p>
            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: questions.length }).map((_, i) => (
                <Star key={i} className={`w-8 h-8 ${i < score ? "fill-sunshine text-sunshine" : "text-border"}`} />
              ))}
            </div>
            <motion.button
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-display text-lg"
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tr("playAgain", lang)}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default QuizGame;
