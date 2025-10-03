"use client";

import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../animation";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
  {
    title: "Главная",
    href: "/",
    src: "caruana.png",
  },
  {
    title: "Магазин",
    href: "/shop",
    src: "magnus.png",
  },
  {
    title: "Авторы",
    href: "/about",
    src: "nepo.png",
  },
  {
    title: "Блог",
    href: "/blog",
    src: "nakamura.png",
  },
  {
    title: "Контакт",
    href: "/contact",
    src: "mamediarov.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
