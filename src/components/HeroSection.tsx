'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [targetPos, setTargetPos] = useState({ x: -1000, y: -1000 });
  const [currentPos, setCurrentPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setCurrentPos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.15),
        y: lerp(prev.y, targetPos.y, 0.15),
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [targetPos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setTargetPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: `radial-gradient(circle 260px at ${currentPos.x}px ${currentPos.y}px, black 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)`,
    maskImage: `radial-gradient(circle 260px at ${currentPos.x}px ${currentPos.y}px, black 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]"
    >
      {/* Base Background Image (IMAGE_1: image1.jpg) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="/image1.jpg"
          alt="Base Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Reveal Layer (IMAGE_2: image2.jpg) with radial-gradient mask */}
      <div
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none overflow-hidden transition-opacity duration-300"
        style={{
          ...maskStyle,
          opacity: isHovered ? 1 : 0,
        }}
      >
        <img
          src="/image2.jpg"
          alt="Reveal Layer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Navbar (z-30) */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">
            About
          </a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">
            Services
          </a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading (z-10) */}
      <div className="overflow-hidden w-full text-center z-10">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none drop-shadow-lg">
            Hi, i&apos;m omar
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait (z-20) - Fixed Position */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-20 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
      >
        <img
          src="/hero-portrait.png"
          alt="Omar Temani Software Engineer Portrait"
          className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] h-auto object-contain mx-auto drop-shadow-2xl pointer-events-none"
        />
      </FadeIn>

      {/* Bottom Bar (z-20) */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 w-full">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[240px] md:max-w-[280px] drop-shadow-md">
            a tunisian software engineering student & web developer crafting striking projects
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
