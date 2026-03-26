"use client";

import "./VideoList.css";

import { useRef } from "react";
import { videos } from "./videos.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function VideoList() {
  const videosContainerRef = useRef(null);

  useGSAP(
    () => {
      const createFeaturedWorkItem = (video) => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";

        videoItem.innerHTML = `
          <a href="${video.route}" class="video-item-link" target="_blank" rel="noopener noreferrer">
            <div class="video-item-img">
              <img src="${video.img}" alt="video preview" />
            </div>
          </a>
        `;

        return videoItem;
      };

      const workContainer = videosContainerRef.current;
      workContainer.innerHTML = "";

      for (let i = 0; i < videos.length; i += 2) {
        const row = document.createElement("div");
        row.className = "row";

        const leftItemIndex = i % videos.length;
        const rightItemIndex = (i + 1) % videos.length;

        row.appendChild(
          createFeaturedWorkItem(videos[leftItemIndex])
        );

        if (i + 1 < videos.length * 2) {
          row.appendChild(
            createFeaturedWorkItem(videos[rightItemIndex])
          );
        }

        workContainer.appendChild(row);
      }

      gsap.set(".video-item", {
        y: 1000,
      });

      document.querySelectorAll(".row").forEach((row) => {
        const featuredWorkItems =
          row.querySelectorAll(".video-item");

        featuredWorkItems.forEach((item, itemIndex) => {
          const isLeftProjectItem = itemIndex === 0;

          gsap.set(item, {
            rotation: isLeftProjectItem ? -60 : 60,
            transformOrigin: "center center",
          });
        });

        ScrollTrigger.create({
          trigger: row,
          start: "top 70%",
          onEnter: () => {
            gsap.to(featuredWorkItems, {
              y: 0,
              rotation: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.25,
            });
          },
        });
      });
    },
    { scope: videosContainerRef }
  );

  return (
    <>
      <div className="video-list" ref={videosContainerRef}></div>
    </>
  );
}