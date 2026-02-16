"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./animation";

export default function Index() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.img
            src="/images/preloader.gif"
            alt="Загрузка"
            variants={opacity}
            initial="initial"
            animate="enter"
            className={styles.gif}
            draggable={false}
          />
        </>
      )}
    </motion.div>
  );
}
