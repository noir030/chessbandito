"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {

  const container = useRef<HTMLDivElement>(null);

  const [isCursorActive, setCursorIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      {!isTouchDevice && <Cursor isActive={isCursorActive} />}
      <Hero scrollYProgress={scrollYProgress} setCursorIsActive={setCursorIsActive} />
      <About scrollYProgress={scrollYProgress} />
      <Contact scrollYProgress={scrollYProgress} />
    </main>
  );
}
