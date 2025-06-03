"use client";
import { useTransform, motion } from "framer-motion";

export default function Hero({ scrollYProgress, setCursorIsActive }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#423189] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p
        onMouseEnter={() => setCursorIsActive(true)}
        onMouseLeave={() => setCursorIsActive(false)}
      >
        Главная страница
      </p>
      <div className="flex gap-4">
        <p>Описание</p>
        <p>проекта</p>
      </div>
    </motion.div>
  );
}
