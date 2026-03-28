"use client";

import "./Button.css";

import { HiLightningBolt } from "react-icons/hi";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "accent" | "ghost";
  icon?: React.ElementType;
  animateOnScroll?: boolean;
  delay?: number;
};

export default function LinkButton({
  href,
  children,
  variant = "dark",
  icon,
  animateOnScroll = false,
  delay = 0,
}: ButtonProps) {
  const IconComponent = icon || HiLightningBolt;

  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!buttonRef.current || !labelRef.current) return;

      gsap.set(labelRef.current, {
        y: 20,
        opacity: 0,
      });

      if (iconRef.current) {
        gsap.set(iconRef.current, {
          scale: 0,
          opacity: 0,
        });
      }

      if (animateOnScroll) {
        gsap.to(labelRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          delay,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            once: true,
          },
        });

        if (iconRef.current) {
          gsap.to(iconRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power4.out",
            delay: delay + 0.15,
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 90%",
              once: true,
            },
          });
        }
      } else {
        gsap.to(labelRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          delay,
        });

        if (iconRef.current) {
          gsap.to(iconRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power4.out",
            delay: delay + 0.15,
          });
        }
      }
    },
    { scope: buttonRef, dependencies: [animateOnScroll, delay] }
  );

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`button button--${variant}`}
      target="_blank"
    >
      <span className="button-label" ref={labelRef}>
        {children}
      </span>

      <span className="button-icon">
        <span className="button-icon-inner" ref={iconRef}>
          <IconComponent size={12} />
        </span>
      </span>
    </a>
  );
}