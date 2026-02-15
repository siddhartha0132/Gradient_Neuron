const neurons = [
  { top: "10%", left: "20%", delay: "0s" },
  { top: "30%", left: "70%", delay: "1s" },
  { top: "60%", left: "10%", delay: "2s" },
  { top: "80%", left: "40%", delay: "0.5s" },
  { top: "20%", left: "50%", delay: "1.5s" },
  { top: "50%", left: "80%", delay: "2.5s" },
  { top: "75%", left: "75%", delay: "1.2s" },
  { top: "15%", left: "85%", delay: "0.8s" },
];

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Soft Glow Blobs */}
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />

      {/* Neurons */}
      {neurons.map((n, i) => (
        <div
          key={i}
          className="absolute w-2.5 h-2.5 bg-white/40 rounded-full animate-neuron"
          style={{
            top: n.top,
            left: n.left,
            animationDelay: n.delay,
          }}
        />
      ))}

    </div>
  );
}
