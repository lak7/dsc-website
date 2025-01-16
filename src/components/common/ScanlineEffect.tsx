import { motion } from "framer-motion";

const ScanlineEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-50">
      {/* Scanlines */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] mix-blend-multiply"></div> */}

      {/* Moving scan line */}
      <motion.div
        className="absolute w-full h-[2px] bg-[rgba(255,255,255,0.1)]"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* CRT vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]"></div>
    </div>
  );
};

export default ScanlineEffect;
