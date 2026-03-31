"use client";

import Menu from "@/components/layout/Menu/Menu";

import { useRef, useMemo } from "react";
import { ReactLenis } from "lenis/react";

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

      <div className="page" ref={pageRef}>
        {children}
      </div>
    </ReactLenis>
  );
}
