"use client";

import "./TelegramCard.css";

import { FaTelegram } from "react-icons/fa";
import LinkButton from "@/components/ui/Button/LinkButton";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TelegramCard() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const items = [titleRef.current, ...textRefs.current].filter(
      Boolean
    ) as HTMLElement[];

    if (!sectionRef.current || !items.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    tl.fromTo(
      titleRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 1.1,
        ease: "power4.out",
      }
    ).fromTo(
      textRefs.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      },
      "-=0.75"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="telegram" ref={sectionRef}>
      <div className="container">
        <div className="telegram-card">
          <div className="telegram-card-copy">
            <div className="telegram-card-col">
              <div className="reveal">
                <h3 ref={titleRef}>Наш Telegram канал</h3>
              </div>
            </div>

            <div className="telegram-card-col">
              <div className="reveal">
                <p
                  ref={(el) => {
                    textRefs.current[0] = el;
                  }}
                >
                  Это наш закрытый уголок. Здесь просто общаемся про шахматы и
                  делимся мыслями
                </p>
              </div>

              <div className="reveal">
                <p
                  ref={(el) => {
                    textRefs.current[1] = el;
                  }}
                >
                  Тут то, что не доходит до YouTube: мысли авторов, новости и
                  просто общение по душам
                </p>
              </div>

              <LinkButton
                animateOnScroll={true}
                delay={0.25}
                variant="light"
                icon={FaTelegram}
                href="https://t.me/pessshka228"
              >
                Перейти в канал
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}