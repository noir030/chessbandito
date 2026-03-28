"use client";

import "./Footer.css";

import { useEffect, useState } from "react";

export default function Footer() {
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
    <footer>
      <div className="container">
        <div className="footer-header-content">
          <div className="footer-header">
            <h1>Шахматы без границ</h1>
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
