import { motion } from "framer-motion";
import CognitiveEngine from "../components/CognitiveEngine";

export default function Future() {
  return (
    <div className="bg-[#030304] text-white overflow-x-hidden">

      {/* ===== HEADER ===== */}
      <section className="pt-40 pb-24 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Future Ideas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          NEURON explores speculative directions for the evolution of cognitive
          interfaces — where intelligence, perception, and interaction converge
          into adaptive digital environments.
        </motion.p>
      </section>
<section className="py-32 text-center">
  <h3 className="text-2xl font-bold mb-6">
    Cognitive Simulation Engine
  </h3>

  <p className="text-gray-500 mb-10">
    A conceptual model demonstrating how future interfaces may interpret
    cognitive signals and adapt interaction environments dynamically.
  </p>

  <CognitiveEngine />
</section>

      {/* ===== IDEA GRID ===== */}
      <section className="py-32 px-6">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Neural Integration",
              desc: "Interfaces that respond to attention patterns, cognitive load, and contextual awareness rather than explicit commands.",
            },
            {
              title: "Predictive Cognition",
              desc: "Systems capable of anticipating user intent through behavioral inference and adaptive interaction flows.",
            },
            {
              title: "Adaptive Intelligence",
              desc: "Dynamic environments where layout, feedback, and visual hierarchy evolve based on interaction context.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10
                         rounded-2xl p-8 hover:bg-white/10 hover:scale-[1.02]
                         transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
<section className="py-32 text-center">
  <h3 className="text-2xl font-bold mb-6">
    Cognitive Simulation Engine
  </h3>

  <p className="text-gray-500 mb-10">
    A conceptual model demonstrating how future interfaces may interpret
    cognitive signals and adapt interaction environments dynamically.
  </p>

  <CognitiveEngine />
</section>

      {/* ===== EXPANSION SECTION ===== */}
      <section className="py-32 px-6 text-center bg-white/[0.02]">
        <h3 className="text-sm font-mono tracking-[0.6em] text-cyan-400 mb-10">
          LONG-TERM VISION
        </h3>

        <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed text-lg">
          These ideas represent exploratory directions rather than finalized
          technologies. NEURON investigates how future interfaces may shift
          toward perceptual responsiveness, minimal cognitive friction, and
          intelligence-driven interaction models.
        </p>
      </section>

      {/* ===== CLOSING STATEMENT ===== */}
      <section className="py-40 text-center px-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Designing for Intelligence-Native Interaction
        </motion.h3>

        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
          NEURON’s future concepts emphasize clarity, adaptability, and cognitive
          alignment — imagining interfaces that behave less like tools and more
          like intelligent environments.
        </p>
      </section>

    </div>
  );
}
