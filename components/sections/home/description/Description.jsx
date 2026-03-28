"use client";

import "./Description.css";

import { descriptionData } from "./descriptionData.js";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Description() {
  const descriptionContainerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px)", () => {
        const reviewCards = document.querySelectorAll(".review-card");
        const cardContainers = document.querySelectorAll(
          ".review-card-container",
        );

        cardContainers.forEach((cardContainer, index) => {
          const rotation = index % 2 === 0 ? 3 : -3;
          gsap.set(cardContainer, { rotation: rotation });

          const computedStyle = window.getComputedStyle(cardContainer);
        });

        const scrollTriggerInstances = [];

        gsap.delayedCall(0.1, () => {
          reviewCards.forEach((card, index) => {
            if (index < reviewCards.length - 1) {
              const trigger = ScrollTrigger.create({
                trigger: card,
                start: "top top",
                endTrigger: reviewCards[reviewCards.length - 1],
                end: "top top",
                pin: true,
                pinSpacing: false,
                scrub: 1,
              });
              scrollTriggerInstances.push(trigger);
            }

            if (index < reviewCards.length - 1) {
              const trigger = ScrollTrigger.create({
                trigger: reviewCards[index + 1],
                start: "top bottom",
                end: "top top",
              });
              scrollTriggerInstances.push(trigger);
            }
          });
        });

        const refreshHandler = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("orientationchange", refreshHandler);
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad, { passive: true });

        return () => {
          scrollTriggerInstances.forEach((trigger) => trigger.kill());
          window.removeEventListener("orientationchange", refreshHandler);
          window.removeEventListener("load", onLoad);
        };
      });

      mm.add("(max-width: 999px)", () => {
        const reviewCards = document.querySelectorAll(".review-card");
        const cardContainers = document.querySelectorAll(
          ".review-card-container",
        );

        reviewCards.forEach((card) => {
          if (card) gsap.set(card, { clearProps: "all" });
        });
        cardContainers.forEach((cardContainer) => {
          if (cardContainer) gsap.set(cardContainer, { clearProps: "all" });
        });

        ScrollTrigger.refresh();

        const refreshHandler = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("orientationchange", refreshHandler);
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad, { passive: true });

        return () => {
          window.removeEventListener("orientationchange", refreshHandler);
          window.removeEventListener("load", onLoad);
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: descriptionContainerRef },
  );

  return (
    <section className="description" ref={descriptionContainerRef}>
      {descriptionData.map((item, index) => (
        <div className="review-card" key={index}>
          <div
            className="review-card-container"
            id={`review-card-${index + 1}`}
          >
            <div className="review-card-content">
              <div className="review-card-content-wrapper">
                <h3 className="review-card-text lg">{item.text}</h3>
                <div className="review-card-client-info">
                  <p className="review-card-client cap">{item.title}</p>
                  <p className="review-card-client-company sm">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
