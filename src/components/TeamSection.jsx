import React, { useState } from 'react';
import { studioConfig, professionals } from '../data/studioData';
import { Instagram, Calendar, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

// Cards das profissionais. Ao passar o mouse em uma, as outras ficam em segundo plano.
export default function TeamSection({ onChoosePro }) {
  const [hover, setHover] = useState(null);

  return (
    <section id="equipe" className="py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">A equipe</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">
            Escolha com quem <span className="italic text-champagne-dark">quer cuidar de você</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-900/70">
            Cada profissional tem sua especialidade e sua própria lista de valores. Você agenda direto com ela.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5" onMouseLeave={() => setHover(null)}>
          {professionals.map((p, i) => {
            const dim = hover && hover !== p.id;
            const from = Math.min(...p.categories.flatMap((c) => c.items.map((it) => it.price)));
            return (
              <Reveal key={p.id} delay={i * 140}>
                <article
                  onMouseEnter={() => setHover(p.id)}
                  className={`group h-full flex flex-col bg-white rounded-[2rem] border border-brand-100 overflow-hidden shadow-sm transition-all duration-500 ${dim ? 'md:opacity-55 md:blur-[1.5px] md:scale-[.98]' : 'md:hover:-translate-y-1.5 md:hover:shadow-2xl md:hover:shadow-brand-900/10'}`}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img src={p.image} alt={`Trabalho de ${p.name}`} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1200ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/10 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-800 text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">{p.area}</span>
                    <div className="absolute bottom-0 p-5 text-white">
                      <h3 className="font-serif text-3xl leading-none">{p.name}</h3>
                      <p className="text-sm text-white/80 mt-1.5">{p.role}</p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col p-5 sm:p-6">
                    <p className="text-sm text-brand-900/75 leading-relaxed">{p.bio}</p>
                    <p className="mt-4 text-xs text-brand-700">
                      Serviços a partir de <strong className="font-serif text-lg text-brand-900">R$ {from}</strong>
                    </p>

                    {p.extra && (
                      <a
                        href={`https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(p.extra.message)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="mt-4 flex items-start gap-3 p-3 rounded-2xl bg-champagne-light/60 hover:bg-champagne-light transition-colors"
                      >
                        <GraduationCap className="w-5 h-5 text-champagne-dark shrink-0 mt-0.5" />
                        <span className="text-xs text-brand-900">
                          <strong className="block text-sm">{p.extra.title}</strong>
                          {p.extra.text}
                        </span>
                      </a>
                    )}

                    <div className="mt-auto pt-5 flex items-center gap-2">
                      <button
                        onClick={() => onChoosePro(p.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-brand-800 hover:bg-brand-900 text-white px-4 py-3 rounded-full text-sm font-medium transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        Agendar com {p.firstName}
                      </button>
                      <a
                        href={p.instagramUrl} target="_blank" rel="noopener noreferrer"
                        aria-label={`Instagram ${p.instagramHandle}`} title={p.instagramHandle}
                        className="w-11 h-11 shrink-0 rounded-full border border-brand-200 flex items-center justify-center text-brand-700 hover:bg-brand-50 transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
