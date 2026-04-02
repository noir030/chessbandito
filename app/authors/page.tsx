"use client";

import "./authors.css";

import Character from '@/components/ui/ScrollText/Character';
import Spotlight from "@/components/sections/common/Spotlight/Spotlight";
import StoriesInfo from "@/components/sections/home/storiesinfo/StoriesInfo";
import TelegramCard from "@/components/sections/common/TelegramCard/TelegramCard";
import Footer from "@/components/layout/Footer/Footer";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraph = "Мы два брата из небольшого города на севере Казахстана. В шахматы играем уже больше 10 лет, но, к сожалению или к счастью, ничего глобального так и не достигли. Как говорил Зигберт Тарраш: шахматы, как любовь и музыка, обладают способностью делать человека счастливым. История нашего канала началась с мема «Тиньков поясняет шахматные дебюты», который мы залили от нечего делать. Он неожиданно выстрелил, и с этого момента мы начали активно вести и развивать наш YouTube - проект. Сейчас работаем над ним вместе, пробуем новое, улучшаем контент и просто стараемся быть на одной волне с теми, кому это тоже заходит."

export default function Authors() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const copySectionRef = useRef<HTMLElement | null>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.2 });

      tl.fromTo(
        titleRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, ease: "power4.out" }
      ).fromTo(
        subtitleRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, ease: "power4.out" },
        "-=0.85"
      );

      const textItems = textRefs.current.filter(
        (el): el is HTMLParagraphElement => el !== null
      );

      if (copySectionRef.current && textItems.length) {
        gsap.fromTo(
          textItems,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 1.1,
            delay: 0.3,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: copySectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="authors-page">
      <section className="authors-header">
        <div className="container">
          <div className="authors-header-row">
            <div className="reveal">
              <h1 ref={titleRef}>Авторы</h1>
            </div>
          </div>

          <div className="authors-header-row">
            <div className="reveal">
              <h1 ref={subtitleRef}>канала</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="authors-images">
        <div className="container">
          <div className="authors-images-row">
            <div className="author-img">
              <img src="/images/authors/author-1.jpeg" alt="author" />
            </div>

            <div className="author-img">
              <img src="/images/authors/author-2.jpeg" alt="author" />
            </div>
          </div>
        </div>
      </section>

      <Character paragraph={paragraph} />

      <Spotlight />
      <StoriesInfo />
      <TelegramCard />
      <Footer />
    </div>
  );
}