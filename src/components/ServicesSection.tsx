'use client';

import React from 'react';
import { FadeIn } from './FadeIn';

const servicesData = [
  {
    num: "01",
    name: "Web Development",
    desc: "Building fast, responsive, and interactive web applications from modern frontends to server-side APIs using React, Next.js, and TypeScript.",
  },
  {
    num: "02",
    name: "Frontend & UI/UX Design",
    desc: "Crafting clean, user-centric interfaces with meticulous attention to typography, responsive layouts, micro-animations, and visual polish.",
  },
  {
    num: "03",
    name: "Software Engineering",
    desc: "Applying core software engineering principles to design clean architecture, structured data models, and maintainable, scalable codebases.",
  },
  {
    num: "04",
    name: "Freelance Projects",
    desc: "Delivering end-to-end custom digital solutions for businesses, startups, and personal brands aiming to stand out with a memorable online presence.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="font-black uppercase text-center text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none">
            Services
          </h2>
        </FadeIn>

        {/* Vertical Services List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {servicesData.map((item, idx) => (
            <FadeIn key={item.num} delay={idx * 0.1} y={30}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 sm:gap-8">
                {/* Left: Number */}
                <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none select-none flex-shrink-0">
                  {item.num}
                </span>

                {/* Right: Stacked Name & Description */}
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C]">
                    {item.name}
                  </h3>
                  <p className="font-light leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C]/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
