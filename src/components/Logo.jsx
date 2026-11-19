import React from 'react';

// Borboleta azul (símbolo do Studio). animate = asas batendo devagar
export function Butterfly({ className = '', animate = false }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bf-up" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8cbcf7" />
          <stop offset="1" stopColor="#2b6cd4" />
        </linearGradient>
        <linearGradient id="bf-low" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2b6cd4" />
          <stop offset="1" stopColor="#1f3f78" />
        </linearGradient>
      </defs>
      <g className={animate ? 'wing-l' : ''}>
        <path d="M31 30C27 18 17 9 8.5 11.5 2 13.5 4 25 12 30c5 3 13 3 19 0Z" fill="url(#bf-up)" />
        <path d="M31 33c-6-.5-15 1.5-17.5 8.5-2 6 3.5 10.5 9 7.5 5-2.8 8-9.5 8.5-16Z" fill="url(#bf-low)" />
        <path d="M27 24c-4-5-9-8-13-7.5" stroke="#fff" strokeOpacity=".55" strokeWidth=".9" strokeLinecap="round" />
      </g>
      <g className={animate ? 'wing-r' : ''}>
        <path d="M33 30c4-12 14-21 22.5-18.5C62 13.5 60 25 52 30c-5 3-13 3-19 0Z" fill="url(#bf-up)" />
        <path d="M33 33c6-.5 15 1.5 17.5 8.5 2 6-3.5 10.5-9 7.5-5-2.8-8-9.5-8.5-16Z" fill="url(#bf-low)" />
        <path d="M37 24c4-5 9-8 13-7.5" stroke="#fff" strokeOpacity=".55" strokeWidth=".9" strokeLinecap="round" />
      </g>
      <rect x="30.6" y="22" width="2.8" height="24" rx="1.4" fill="#0e1d3b" />
      <path d="M31.5 22.5c-1-4-3-6.5-5-7.5M32.5 22.5c1-4 3-6.5 5-7.5" stroke="#0e1d3b" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Borboleta + DONNA EVA em serifa caixa alta + STUDIO DE BELEZA
export default function Logo({ light = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${light ? 'text-white' : 'text-brand-800'}`}>
      <Butterfly className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.15rem] sm:text-[1.3rem] font-medium uppercase tracking-[0.18em]">Donna Eva</span>
        <span className={`mt-1.5 text-[8.5px] tracking-[0.42em] font-medium ${light ? 'text-champagne' : 'text-champagne-dark'}`}>STUDIO DE BELEZA</span>
      </span>
    </span>
  );
}
