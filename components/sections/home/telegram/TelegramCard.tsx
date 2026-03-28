"use client";

import "./TelegramCard.css";
import LinkButton from "@/components/ui/Button/LinkButton";
import Button from "@/components/ui/Button/Button";

import gsap from "gsap";
import { FaTelegram } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TelegramCard() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const newsRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = [
        ...newsRefs.current,
        titleRef.current,
        ...textRefs.current,
      ].filter(Boolean) as HTMLElement[];

      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="telegram" ref={sectionRef}>
      <div className="container">
        <div className="telegram-copy">
          <div className="telegram-col">
            <div className="reveal">
              <p className="sm">Для справки</p>
            </div>
          </div>

          <div className="telegram-col">
            <div className="reveal">
              <p
                className="lg"
                ref={(el) => {
                  newsRefs.current[0] = el;
                }}
              >
                У нас на сайте есть последние новости из мира шахмат в формате
                сторис, просто для информации
              </p>
            </div>

            <Button
              animateOnScroll={true}
              delay={0.25}
              variant="dark"
              href="/news"
            >
              Чекнуть новости
            </Button>
          </div>
        </div>

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
                  делимся мыслями.
                </p>
              </div>

              <div className="reveal">
                <p
                  ref={(el) => {
                    textRefs.current[1] = el;
                  }}
                >
                  Тут то, что не доходит до YouTube: мысли авторов, новости и
                  просто общение по душам.
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