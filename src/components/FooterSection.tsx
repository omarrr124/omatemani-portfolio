'use client';

import React from 'react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 border-t border-[#D7E2EA]/10 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-[clamp(1.8rem,5.5vw,75px)] leading-tight tracking-tight max-w-6xl select-none text-center">
            <span className="block whitespace-nowrap">Let&apos;s build something</span>
            <span className="block whitespace-nowrap">incredible together</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p className="text-[#D7E2EA]/70 uppercase tracking-widest text-sm sm:text-base font-light max-w-md">
            Available for freelance Web Development & Software Engineering projects worldwide.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <ContactButton href="mailto:temaniomar8@gmail.com" />
        </FadeIn>

        <div className="w-full pt-16 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/50 border-t border-[#D7E2EA]/10 gap-4">
          <span>© {new Date().getFullYear()} Omar — Software Engineer. All rights reserved.</span>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/omartemani?stkn=MWowbTNrbDJjamw3YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D7E2EA] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
