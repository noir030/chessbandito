import styles from "./style.module.scss";
import { translate } from "../../animation";
import { motion } from "framer-motion";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { SiBoosty } from "react-icons/si";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.icons}>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href="https://www.youtube.com/@chessbandito"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtube}
          >
            <FaYoutube size={20} />
          </a>
        </motion.li>
        <motion.li
          custom={[0.4, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href="https://boosty.to/otstalaya_peshka"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.boosty}
          >
            <SiBoosty size={20} />
          </a>
        </motion.li>
        <motion.li
          custom={[0.5, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href="https://t.me/pessshka228"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegram}
          >
            <FaTelegramPlane size={20} />
          </a>
        </motion.li>
      </ul>

      <ul>
        <motion.li
          custom={[0.6, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Отсталая Пешка 2025 |</span> Сделано с любовью к шахматам
        </motion.li>
      </ul>
    </div>
  );
}
