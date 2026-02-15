import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleProgress = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [1, 0.85]),
    { stiffness: 80, damping: 25 }
  );

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 12]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  return (
    <div className="bg-[#030304] text-white overflow-x-hidden">

      {/* ===== DEPTH BACKGROUND ===== */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%]
                        opacity-30 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#030304_50%)]" />

        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle,#22d3ee22,transparent_60%)]"
        />
      </div>

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        <motion.div
          style={{ scale: scaleProgress, rotateX, opacity: opacityHero }}
          className="relative flex flex-col items-center"
        >
          <div className="absolute w-[520px] h-[520px] border border-cyan-500/10 rounded-full blur-md animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[500px] h-[500px] border-t border-purple-500/30 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
          <div className="absolute w-[460px] h-[460px] border border-white/5 rounded-full animate-pulse" />

          <h1 className="text-[11vw] font-black uppercase italic tracking-[0.12em] leading-none">
            <span className="block bg-gradient-to-b from-white via-white/70 to-white/5 bg-clip-text text-transparent">
              Neuron
            </span>
          </h1>

          <div className="mt-6 w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-mono text-[11px] tracking-[0.5em] text-cyan-400"
          >
            BEYOND HUMAN PERCEPTION
          </motion.p>
        </motion.div>
      </section>

      {/* ===== WHAT IS NEURON ===== */}
      <section className="py-40 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-xs font-mono tracking-[0.6em] text-cyan-400 mb-10">
          WHAT IS NEURON
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          NEURON is a conceptual exploration of next-generation human–AI
          interaction. It imagines a paradigm where interfaces behave less like
          static tools and more like adaptive cognitive environments. Rather than
          rigid layouts, NEURON explores fluid digital spaces that evolve with
          perception, intent, and attention.
        </p>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-40 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            {
              title: "Perception Mapping",
              desc: "System states adapt based on focus, interaction rhythm, and contextual signals.",
            },
            {
              title: "Cognitive Response",
              desc: "Visual transitions simulate depth, presence, and neural-like feedback loops.",
            },
            {
              title: "Adaptive Flow",
              desc: "Interfaces evolve dynamically to preserve clarity and relevance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FEATURE EXPERIENCE ===== */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono text-purple-400 tracking-[0.8em] text-center mb-24">
          NEURAL ARCHITECTURE
        </h2>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            whileHover={{ rotateY: -12, rotateX: 6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative aspect-video rounded-3xl border border-white/10
                       bg-gradient-to-br from-white/10 to-transparent
                       backdrop-blur-3xl shadow-[0_0_80px_rgba(34,211,238,0.08)]"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#22d3ee33,transparent)]" />

            <div className="p-12 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full border border-cyan-400/30 flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              </div>

              <div>
                <h3 className="text-4xl font-bold mb-4">
                  Adaptive Intelligence
                </h3>

                <p className="text-gray-400 max-w-sm">
                  A conceptual interface model that dynamically evolves with
                  cognition, perception, and interaction context.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                title: "01 / Synthetic Synapse",
                detail:
                  "Real-time bridging between neural-inspired logic and digital systems.",
              },
              {
                title: "02 / Kinetic Feedback",
                detail:
                  "Motion-driven responses simulating spatial depth & interface presence.",
              },
              {
                title: "03 / Cognitive Flow",
                detail:
                  "Interaction patterns aligned with attention & perception cycles.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                className="border-l border-white/10 pl-8"
              >
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOTION STRIP ===== */}
      <section className="py-40 overflow-hidden bg-white/[0.03]">
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0.5, 1], [800, -800]) }}
          className="whitespace-nowrap text-[14vw] font-black uppercase stroke-text"
        >
          Intelligence • Intelligence • Intelligence
        </motion.div>
      </section>

      {/* ===== VISION ===== */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          A Glimpse Into Cognitive Interfaces
        </h2>

        <p className="text-gray-500 leading-relaxed">
          NEURON is not a product — it is a thought experiment. A visual and
          interactive study exploring how perception, intelligence, and design
          may converge within future digital environments.
        </p>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-40 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="relative p-[1px] rounded-2xl
                     bg-gradient-to-r from-transparent via-cyan-500 to-transparent
                     w-full max-w-md"
        >
          <div className="bg-[#050505] p-12 rounded-2xl text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-6">
              Initialize Core?
            </h3>

            <button className="w-full py-4 bg-white text-black font-bold uppercase
                               tracking-widest hover:bg-cyan-400 transition duration-500">
              Enter Singularity
            </button>
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.12);
          color: transparent;
        }
      `}</style>
    </div>
  );
}
