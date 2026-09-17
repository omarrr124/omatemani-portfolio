'use client';

import React from 'react';
import { Loader } from '@/components/Loader';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="relative bg-[#0C0C0C] min-h-screen text-[#D7E2EA] overflow-x-clip">
      {/* PAGE PRELOADER */}
      <Loader />

      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* FOOTER & CONTACT */}
      <FooterSection />
    </main>
  );
}
