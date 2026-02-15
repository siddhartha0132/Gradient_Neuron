import { motion } from "framer-motion";
import { useState } from "react";

const outputs = [
  "Signal Coherence: Stable",
  "Cognitive Load: Optimal",
  "Prediction Entropy: Low",
  "Neural Sync: Achieved",
  "Adaptive Mapping: Enabled",
];

export default function CognitiveEngine() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full max-w-xl mx-auto">

      {!active ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setActive(true)}
          className="px-10 py-4 rounded-xl bg-gradient-to-r
                     from-cyan-500 to-purple-500 font-bold
                     shadow-lg shadow-cyan-500/20"
        >
          Run Cognitive Analysis
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-10 backdrop-blur-xl bg-white/5 border border-white/10
                     rounded-2xl p-8 text-left space-y-3"
        >
          <p className="text-cyan-400 font-mono text-xs tracking-widest mb-4">
            ANALYSIS OUTPUT
          </p>

          {outputs.map((item, i) => (
            <motion.p
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="text-gray-300 font-mono text-sm"
            >
              {item}
            </motion.p>
          ))}

          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => setActive(false)}
            className="mt-6 text-xs text-gray-500 hover:text-white"
          >
            Reset Engine
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
