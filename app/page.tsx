"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "@/components/layout/Preloader/Preloader";
import Showreel from "@/components/sections/home/showreel/Showreel";
import Videos from "@/components/sections/home/videos/Videos";
import Footer from "@/components/layout/Footer/Footer";

import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Support from "@/components/sections/home/Support";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <main>
      <Preloader />

      <Showreel />
      <Videos />
      <Footer />
    </main>
  );
}
