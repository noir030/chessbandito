"use client";

import "./StoriesInfo.css";
import Button from "@/components/ui/Button/Button";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoriesInfo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="storiesInfo" ref={sectionRef}>
      <div className="container">
        <div className="storiesInfo-copy">
          <div className="storiesInfo-col">
            <div className="reveal">
              <p className="sm">Для справки</p>
            </div>
          </div>

          <div className="storiesInfo-col">
            <div className="reveal">
              <p className="lg" ref={textRef}>
                У нас на сайте есть последние новости из мира шахмат в формате сторис, просто для информации
              </p>
            </div>

            <Button variant="dark" href="/stories">
              Чекнуть новости
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}