"use client";

import "./ComingSoon.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComingSoon() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { yPercent: 100 },
      { 
        yPercent: 0, 
        duration: 1,
        delay: 1.2,  
        ease: "power4.out" 
    },
    );

    gsap.fromTo(
      subtitleRef.current,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1,
        delay: 1.5,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section className="coming-soon-section">
      <div className="coming-soon-header">
        <div className="container">
          <div className="coming-soon-header-row">
            <h2 ref={titleRef}>Будет позже</h2>
          </div>
          <div className="coming-soon-header-row">
            <p className="lg" ref={subtitleRef}>возможно</p>
          </div>
        </div>
      </div>
    </section>
  );
}
