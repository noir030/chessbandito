"use client";

import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Support from "@/components/sections/home/Support";

import { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 1500)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Hero />
      <About />
      <Support />
    </main>
  );
}
