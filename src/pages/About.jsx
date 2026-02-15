import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <div className="bg-[#030304] text-white overflow-x-hidden">

      {/* ===== HEADER ===== */}
      <Reveal>
      <section className="pt-40 pb-32 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          About NEURON
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          NEURON is a conceptual exploration into the future of human–AI
          interaction. It investigates how digital interfaces can evolve beyond
          static screens into adaptive, perceptual, and intelligence-driven
          environments.
        </motion.p>
      </section>

      {/* ===== CORE IDEA ===== */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-sm font-mono tracking-[0.6em] text-cyan-400 mb-10">
          CORE IDEA
        </h3>

        <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed text-lg">
          Traditional interfaces are built around rigid layouts and predefined
          workflows. NEURON challenges this paradigm by imagining interfaces that
          behave more like cognitive systems — responding to context, adapting to
          attention, and prioritizing clarity over complexity.
        </p>
      </section>

      {/* ===== DESIGN PHILOSOPHY ===== */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            {
              title: "Minimal Intelligence",
              desc: "Design that removes noise, allowing intelligence to emerge through clarity and restraint.",
            },
            {
              title: "Perceptual Flow",
              desc: "Layouts and motion guided by how humans naturally process information.",
            },
            {
              title: "Adaptive Presence",
              desc: "Interfaces that feel responsive, alive, and aware rather than mechanical.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY NEURON ===== */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-sm font-mono tracking-[0.6em] text-purple-400 mb-10">
          WHY NEURON
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          As artificial intelligence systems become deeply integrated into daily
          workflows, the way humans interact with technology must evolve. NEURON
          explores how future interfaces can become intuitive cognitive spaces —
          reducing friction, enhancing focus, and aligning with human perception
          rather than forcing users to adapt to machines.
        </p>
      </section>

      {/* ===== CLOSING STATEMENT ===== */}
      <section className="py-40 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          A Thought Experiment in Intelligence Design
        </motion.h3>

        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
          NEURON is not a finished product. It is a visual and interactive study
          — a glimpse into how intelligence, design, and perception may converge
          to shape the next generation of digital experiences.
        </p>
      </section>
</Reveal>
    </div>
  );
}
