"use client";
import { useTransform, motion } from "framer-motion";

export default function Index({ scrollYProgress }) {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen text-[3.5vw] flex flex-col items-center justify-center bg-white text-[#1C1C1C]">
      О нас
    </motion.div>
  );
}
