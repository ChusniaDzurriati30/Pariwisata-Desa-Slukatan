"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroImage from "../../../../public/image/hero1.svg"; // Ganti dengan path yang sesuai
import BgImage from "../../../../public/image/hero1.svg"; // Ganti dengan path yang sesuai

export default function Hero() {
  const bubbleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (bubbleContainerRef.current) {
        const { clientX, clientY } = event;
        const bubbles = bubbleContainerRef.current.children;

        for (let i = 0; i < bubbles.length; i++) {
          const bubble = bubbles[i] as HTMLElement;
          const speed = bubble.dataset.speed;
          if (speed) {
            const x = (window.innerWidth - clientX * parseFloat(speed)) / 100;
            const y = (window.innerHeight - clientY * parseFloat(speed)) / 100;
            bubble.style.transform = `translate(${x}px, ${y}px)`;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.type = "text/css";
    let styles = "";
    for (let i = 0; i < 20; i++) {
      styles += `
        .bubble-${i} {
          left: ${Math.random() * 100}%;
          animation-duration: ${10 + Math.random() * 10}s;
          animation-delay: -${Math.random() * 10}s;
        }
      `;
    }
    style.innerHTML = styles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToDestination = () => {
    const element = document.getElementById("destination");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="Hero"
      className="relative bg-primary mt-[78px] lg:mt-[100px] overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="bubbles" ref={bubbleContainerRef}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`bubble bubble-${i}`}
            data-speed={`${5 + i * 2}`}
          ></div>
        ))}
      </div>
      <div className="p-5 md:p-10 lg:py-28 lg:px-[100px] md:flex md:justify-between items-center relative bg-white bg-opacity-75">
        <div className="md:max-w-md lg:max-w-3xl text-center md:text-left">
          <h1 className="text-[32px] lg:text-[48px] text-gray-900 font-bold">
            EXPLORE & TRAVEL
          </h1>
          <h2 className="text-[48px] lg:text-[72px] text-[#DA7297] font-bold leading-none">
            DESA SLUKATAN
          </h2>
          <p className="font-medium text-lg lg:text-2xl text-gray-700 mt-2 lg:mt-6">
            Nikmati panorama menakjubkan, udara segar, dan keramahan penduduk
            kami. Temukan kedamaian dan keaslian yang hakiki hanya di sini.
          </p>
          <button
            onClick={scrollToDestination}
            className="mt-6 bg-[#DA7297] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#68D2E8]"
          >
            Read more
          </button>
        </div>
        <div className="max-w-xl mx-auto md:mx-0 mt-10 md:mt-0">
          <Image alt="Hero" src={HeroImage} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
