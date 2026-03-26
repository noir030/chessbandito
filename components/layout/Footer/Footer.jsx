"use client";

import "./Footer.css";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { revealUp } from "./animation";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });
  const [locationTime, setLocationTime] = useState("");

  useEffect(() => {
    const updateLocationTime = () => {
      const options = {
        timeZone: "Asia/Almaty",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const formatter = new Intl.DateTimeFormat("ru-RU", options);
      const timeString = formatter.format(new Date());
      setLocationTime(timeString);
    };

    updateLocationTime();
    const timeInterval = setInterval(updateLocationTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="container">
        <div className="footer-header-content">
          <div className="footer-header">
            <div className="reveal">
              <motion.h1
                variants={revealUp}
                initial="initial"
                animate={isInView ? "open" : "initial"}
              >
                Шахматы без границ
              </motion.h1>
            </div>
          </div>
        </div>

        <div className="footer-byline">
          <div className="footer-time">
            <p>
              Рудный, Казахстан: <span>{locationTime}</span>
            </p>
          </div>

          <div className="footer-author">
            <p>Developed by Mirka</p>
          </div>

          <div className="footer-copyright">
            <p>&copy; Отсталая пешка</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
