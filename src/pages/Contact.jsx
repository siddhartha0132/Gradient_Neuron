import { motion } from "framer-motion";

export default function Contact() {
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
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Interested in the NEURON concept or its design philosophy?  
          Let’s connect and explore ideas around cognitive interfaces and
          intelligent interaction systems.
        </motion.p>
      </section>

      {/* ===== CONTACT PANEL ===== */}
      <section className="py-24 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md p-[1px] rounded-2xl
                     bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        >
          <div className="bg-[#050505] rounded-2xl p-10 backdrop-blur-xl">

            <div className="space-y-6 text-center">
              <p className="text-gray-500 text-sm">
                For discussions, collaborations, or feedback:
              </p>

              <button
                className="w-full py-4 rounded-xl bg-white text-black font-bold
                           uppercase tracking-widest hover:bg-cyan-400
                           transition duration-500"
              >
                Get In Touch
              </button>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER STATEMENT ===== */}
      <section className="py-32 text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 text-sm"
        >
          NEURON is a conceptual interface study exploring the evolution of
          human–AI interaction.
        </motion.p>
      </section>

    </div>
  );
}
