"use client";

import Menu from "@/components/layout/Menu/Menu";

import { useRef, useMemo, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";                              

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true, 
        force: true, 
        lock: false,
      });
    }
  }, [pathname, lenis]);

  return null;
}

export default function ClientLayout({ children }) {
  const pageRef = useRef(null);

  const scrollSettings = useMemo(
    () => ({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.4,
      infinite: false,
      lerp: 0.1,
      wheelMultiplier: 1,
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
    }),
    [],
  );

  return (
    <ReactLenis root options={scrollSettings}>
      <Menu pageRef={pageRef} />
      <ScrollReset />

      <div className="page" ref={pageRef}>
        {children}
      </div>
    </ReactLenis>
  );
}
