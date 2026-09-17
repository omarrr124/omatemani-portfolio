'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface ProjectData {
  num: string;
  title: string;
  link: string;
  imgCol1Top: string;
  imgCol1Bottom: string;
  imgCol2: string;
}

const projectsData: ProjectData[] = [
  {
    num: "01",
    title: "Oma Coffee",
    link: "https://oma-coffee.vercel.app/",
    imgCol1Top: "/projects/oma_coffee_2.png",
    imgCol1Bottom: "/projects/oma_coffee_3.png",
    imgCol2: "/projects/oma_coffee_1.png",
  },
  {
    num: "02",
    title: "Royal Dream",
    link: "https://royal-dream.vercel.app/",
    imgCol1Top: "/projects/royal_dream_2.png",
    imgCol1Bottom: "/projects/royal_dream_3.png",
    imgCol2: "/projects/royal_dream_1.png",
  },
  {
    num: "03",
    title: "Chef Class",
    link: "https://chefclass-yddj.vercel.app/",
    imgCol1Top: "/projects/chef_class_2.png",
    imgCol1Bottom: "/projects/chef_class_3.png",
    imgCol2: "/projects/chef_class_1.png",
  },
];

const ProjectCard: React.FC<{
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}> = ({ project, index, totalCards, progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate stack target scale: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const startRange = index / totalCards;
  const endRange = 1;
  const scale = useTransform(progress, [startRange, endRange], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-auto mb-16 sm:mb-24 last:mb-0"
      style={{
        top: `calc(6rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-2xl origin-top transition-shadow duration-300"
      >
        {/* Top Row Header */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,6vw,5rem)] leading-none select-none">
              {project.num}
            </span>
            {/* Project Name */}
            <h3 className="font-medium uppercase text-lg sm:text-2xl md:text-3xl text-[#D7E2EA]">
              {project.title}
            </h3>
          </div>

          {/* Live Project Button */}
          <LiveProjectButton href={project.link} />
        </div>

        {/* Bottom Row Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left Column (40% width / 5 cols) - 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <img
              src={project.imgCol1Top}
              alt={`${project.title} mid screenshot`}
              loading="lazy"
              className="w-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(130px,16vw,230px)]"
            />
            <img
              src={project.imgCol1Bottom}
              alt={`${project.title} lower screenshot`}
              loading="lazy"
              className="w-full object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(160px,22vw,340px)]"
            />
          </div>

          {/* Right Column (60% width / 7 cols) - 1 Tall Image */}
          <div className="md:col-span-7 flex">
            <img
              src={project.imgCol2}
              alt={`${project.title} main screenshot`}
              loading="lazy"
              className="w-full h-full min-h-[300px] sm:min-h-[400px] object-cover object-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-24 select-none">
            Projects
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col">
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={idx}
              totalCards={projectsData.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
