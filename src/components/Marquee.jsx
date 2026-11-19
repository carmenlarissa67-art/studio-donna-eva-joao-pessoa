import React from 'react';
import { Butterfly } from './Logo';

export default function Marquee() {
  const items = ['Alongamento em gel', 'Volume brasileiro', 'Design com henna', 'Efeito fox', 'Banho de gel', 'Volume glamour', 'Buço', 'Curso de unhas'];
  const row = [...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden bg-brand-800 py-4 border-y border-brand-900">
      <div className="marquee">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center font-serif italic text-xl sm:text-2xl text-brand-100 whitespace-nowrap px-6">
            {t}
            <Butterfly className="ml-12 w-5 h-5" />
          </span>
        ))}
      </div>
    </div>
  );
}
