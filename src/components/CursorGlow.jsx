import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* Smooth physics for premium feel */
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-0"
      style={{
        translateX: smoothX,
        translateY: smoothY,
        x: "-50%",
        y: "-50%",
        background:
          "radial-gradient(circle, rgba(34,211,238,0.15), transparent 60%)",
        filter: "blur(80px)",
      }}
    />
  );
}
