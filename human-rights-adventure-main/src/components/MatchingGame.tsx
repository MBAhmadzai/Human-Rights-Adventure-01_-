import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, Sparkles } from "lucide-react";
import { tr, type LangCode } from "@/lib/translations";

interface MatchingGameProps {
  lang: LangCode;
}

const pairs = [
  { rightKey: "matchRight1", situationKey: "matchSituation1" },
  { rightKey: "matchRight2", situationKey: "matchSituation2" },
  { rightKey: "matchRight3", situationKey: "matchSituation3" },
  { rightKey: "matchRight4", situationKey: "matchSituation4" },
  { rightKey: "matchRight5", situationKey: "matchSituation5" },
];

const emojis = ["📚", "🛡️", "❤️", "🤝", "💬"];

const shuffleArray = <T,>(arr: T[]): T[] => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MatchingGame = ({ lang }: MatchingGameProps) => {
  const [shuffledSituations] = useState(() =>
    shuffleArray(pairs.map((p, i) => ({ ...p, originalIndex: i })))
  );
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [wrongPair, setWrongPair] = useState<{ right: number; sit: number } | null>(null);
  const [finished, setFinished] = useState(false);

  const handleRightClick = (idx: number) => {
    if (Object.values(matches).includes(idx)) return;
    setSelectedRight(idx);
    setWrongPair(null);
  };

  const handleSituationClick = useCallback(
    (originalIndex: number) => {
      if (selectedRight === null) return;
      if (matches[originalIndex] !== undefined) return;

      if (selectedRight === originalIndex) {
        const newMatches = { ...matches, [originalIndex]: originalIndex };
        setMatches(newMatches);
        setSelectedRight(null);
        setWrongPair(null);
        if (Object.keys(newMatches).length === pairs.length) {
          setTimeout(() => setFinished(true), 600);
        }
      } else {
        setWrongPair({ right: selectedRight, sit: originalIndex });
        setTimeout(() => {
          setWrongPair(null);
          setSelectedRight(null);
        }, 800);
      }
    },
    [selectedRight, matches]
  );

  const handleRestart = () => {
    setSelectedRight(null);
    setMatches({});
    setWrongPair(null);
    setFinished(false);
  };

  const matchedCount = Object.keys(matches).length;

  return (
    <div className="bg-card rounded-3xl shadow-xl p-6 md:p-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          🧩 {tr("matchingTitle", lang)}
        </h3>
        <p className="text-muted-foreground font-body">
          {tr("matchingSubtitle", lang)}
        </p>
      </div>

      {!finished ? (
        <>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-1">
              {pairs.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    matches[i] !== undefined ? "bg-mint" : "bg-border"
                  }`}
                  animate={matches[i] !== undefined ? { scale: [1, 1.4, 1] } : {}}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-body">
              {matchedCount}/{pairs.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rights column */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-foreground text-center mb-3 text-lg">
                {tr("rights", lang)}
              </h4>
              {pairs.map((pair, i) => {
                const isMatched = Object.values(matches).includes(i);
                const isSelected = selectedRight === i;
                const isWrong = wrongPair?.right === i;
                return (
                  <motion.button
                    key={i}
                    className={`w-full p-4 rounded-xl border-2 text-left flex items-center gap-3 transition-all font-body ${
                      isMatched
                        ? "border-mint bg-mint/10 opacity-60"
                        : isWrong
                        ? "border-destructive bg-destructive/10"
                        : isSelected
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border hover:border-primary/40 bg-card"
                    }`}
                    onClick={() => handleRightClick(i)}
                    whileHover={!isMatched ? { scale: 1.02 } : {}}
                    whileTap={!isMatched ? { scale: 0.98 } : {}}
                    disabled={isMatched}
                  >
                    <span className="text-2xl">{emojis[i]}</span>
                    <span className="text-foreground font-medium">{tr(pair.rightKey, lang)}</span>
                    {isMatched && <CheckCircle className="w-5 h-5 text-mint ml-auto" />}
                  </motion.button>
                );
              })}
            </div>

            {/* Situations column */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-foreground text-center mb-3 text-lg">
                {tr("situations", lang)}
              </h4>
              {shuffledSituations.map((item, i) => {
                const isMatched = matches[item.originalIndex] !== undefined;
                const isWrong = wrongPair?.sit === item.originalIndex;
                return (
                  <motion.button
                    key={i}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all font-body ${
                      isMatched
                        ? "border-mint bg-mint/10 opacity-60"
                        : isWrong
                        ? "border-destructive bg-destructive/10"
                        : selectedRight !== null
                        ? "border-border hover:border-ocean/60 bg-card cursor-pointer"
                        : "border-border bg-card opacity-70"
                    }`}
                    onClick={() => handleSituationClick(item.originalIndex)}
                    whileHover={!isMatched && selectedRight !== null ? { scale: 1.02 } : {}}
                    whileTap={!isMatched && selectedRight !== null ? { scale: 0.98 } : {}}
                    disabled={isMatched}
                  >
                    <span className="text-foreground text-sm">{tr(item.situationKey, lang)}</span>
                    {isMatched && <CheckCircle className="w-4 h-4 text-mint mt-1" />}
                    {isWrong && <XCircle className="w-4 h-4 text-destructive mt-1" />}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Trophy className="w-20 h-20 mx-auto text-sunshine fill-sunshine mb-4" />
          </motion.div>
          <h3 className="text-3xl font-display font-bold text-foreground mb-2">
            {tr("matchingComplete", lang)}
          </h3>
          <p className="text-lg text-muted-foreground mb-4 font-body">
            {tr("matchingCongrats", lang)}
          </p>
          <div className="flex justify-center gap-2 mb-6">
            {pairs.map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Sparkles className="w-8 h-8 text-sunshine fill-sunshine" />
              </motion.div>
            ))}
          </div>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-display text-lg flex items-center gap-2 mx-auto"
            onClick={handleRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-5 h-5" />
            {tr("playAgain", lang)}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default MatchingGame;
