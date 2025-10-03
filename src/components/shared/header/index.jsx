"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./animation";
import Nav from "./nav";

export default function index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.header} ${isActive ? "bg-[#202020]" : ""}`}>
      <div className={styles.bar}>
        <Link href="/">Отсталая пешка</Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Меню
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Закрыть
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.donateContainer}
        >
          <div className={styles.el}>
            <a
              href="https://www.donationalerts.com/r/otstalayapeshka228"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.label}
            >
              Поддержать
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
