"use client";

import "./Hero.css";
import Button from "@/components/ui/Button/Button";
import { FaYoutube } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import { isInitialLoad } from "@/components/layout/Preloader/Preloader";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!titleRef.current || !textRef.current) return;

    const delay = isInitialLoad ? 6.2 : 1.2;

    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 1.1,
        delay,
        ease: "power4.out",
      }
    ).fromTo(
      textRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.75"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content-main">
          <div className="hero-header">
            <div className="reveal">
              <h2 ref={titleRef}>
                Те, кто говорят, что понимают шахматы, ничего не понимают
              </h2>
            </div>
          </div>

          <div className="hero-footer">
            <div className="reveal">
              <p ref={textRef} className="lg">
                Мы первый канал на русском YouTube, на котором авторы не строят
                из себя интеллигентов, не стесняются выражений и стараются быть
                на одной волне со своей аудиторией
              </p>
            </div>

            <Button
              delay={isInitialLoad ? 7 : 2}
              icon={FaYoutube}
              href="/contact"
            >
              Перейти на YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}