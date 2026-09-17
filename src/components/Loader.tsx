'use client';

import React, { useState, useEffect } from 'react';

export const Loader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 1800);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  const pathData = "M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0C0C] transition-opacity duration-500 ${
        isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-[100px] h-[100px] scale-[0.8] drop-shadow-[0_0_15px_#B600A833] [--fill-color:#B600A8]">
        {/* SVG Definition Template (Rendered once) */}
        <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
          <defs>
            <filter id="shine">
              <feGaussianBlur stdDeviation={3} />
            </filter>
            <mask id="mask">
              <path d={pathData} fill="white" />
            </mask>
            <radialGradient id="gradient-1" cx={50} cy={66} fx={50} fy={66} r={30} gradientTransform="translate(0 35) scale(1 0.5)" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="black" stopOpacity="0.3" />
              <stop offset="50%" stopColor="black" stopOpacity="0.1" />
              <stop offset="100%" stopColor="black" stopOpacity={0} />
            </radialGradient>
            <radialGradient id="gradient-2" cx={55} cy={20} fx={55} fy={20} r={30} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </radialGradient>
            <radialGradient id="gradient-3" cx={85} cy={50} fx={85} fy={50} href="#gradient-2" />
            <radialGradient id="gradient-4" cx={50} cy={58} fx={50} fy={58} r={60} gradientTransform="translate(0 47) scale(1 0.2)" href="#gradient-3" />
            <linearGradient id="gradient-5" x1={50} y1={90} x2={50} y2={10} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="black" stopOpacity="0.2" />
              <stop offset="40%" stopColor="black" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>

        {/* Pegtop 1 */}
        <svg className="loader-pegtop-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g>
            <path d={pathData} fill="var(--fill-color)" />
            <path d={pathData} fill="url(#gradient-1)" />
            <path d={pathData} fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#shine)" mask="url(#mask)" />
            <path d={pathData} fill="url(#gradient-2)" />
            <path d={pathData} fill="url(#gradient-3)" />
            <path d={pathData} fill="url(#gradient-4)" />
            <path d={pathData} fill="url(#gradient-5)" />
          </g>
        </svg>

        {/* Pegtop 2 */}
        <svg className="loader-pegtop-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g>
            <path d={pathData} fill="var(--fill-color)" />
            <path d={pathData} fill="url(#gradient-1)" />
            <path d={pathData} fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#shine)" mask="url(#mask)" />
            <path d={pathData} fill="url(#gradient-2)" />
            <path d={pathData} fill="url(#gradient-3)" />
            <path d={pathData} fill="url(#gradient-4)" />
            <path d={pathData} fill="url(#gradient-5)" />
          </g>
        </svg>

        {/* Pegtop 3 */}
        <svg className="loader-pegtop-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g>
            <path d={pathData} fill="var(--fill-color)" />
            <path d={pathData} fill="url(#gradient-1)" />
            <path d={pathData} fill="none" stroke="white" opacity="0.3" strokeWidth={3} filter="url(#shine)" mask="url(#mask)" />
            <path d={pathData} fill="url(#gradient-2)" />
            <path d={pathData} fill="url(#gradient-3)" />
            <path d={pathData} fill="url(#gradient-4)" />
            <path d={pathData} fill="url(#gradient-5)" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
