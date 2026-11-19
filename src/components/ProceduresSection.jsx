import React, { useState } from 'react';
import { studioConfig, professionals, comboService, formatPrice } from '../data/studioData';
import { Clock, RefreshCw, ChevronRight, Sparkles, Info, Check } from 'lucide-react';
import Reveal from './Reveal';
import { Butterfly } from './Logo';

export default function ProceduresSection({ onSelectProcedure }) {
  const [activeId, setActiveId] = useState(professionals[0].id);
  const pro = professionals.find((p) => p.id === activeId);

  const pick = (cat, item) =>
    onSelectProcedure({
      ...item,
      category: cat.title,
      categoryId: cat.id,
      proId: pro.id,
      proName: pro.name,
      proArea: pro.area,
      duration: item.duration || cat.duration,
    });

  const combo = studioConfig.combo;

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-brand-100/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Serviços e valores</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">
            Os valores de <span className="italic text-champagne-dark">cada profissional</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-900/70">
            Toque no serviço para agendar. O pedido já vai com o nome da profissional.
          </p>
        </Reveal>

        {/* Abas por profissional */}
        <Reveal delay={120} className="mt-10">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 max-w-xl mx-auto p-1.5 bg-white rounded-full border border-brand-200">
            {professionals.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`relative px-2 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeId === p.id ? 'bg-brand-800 text-white shadow-lg shadow-brand-900/20' : 'text-brand-800 hover:bg-brand-50'
                }`}
              >
                {p.area}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={pro.id} className="animate-pop mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-brand-900/10 group">
              <img src={pro.image} alt={pro.area} className="w-full h-72 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-[1200ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/10 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/75">{pro.role}</span>
                <h3 className="font-serif text-3xl mt-1">{pro.name}</h3>
                <p className="text-sm text-white/85 mt-1 leading-relaxed">{pro.bio}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {pro.categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-[2rem] border border-brand-100 shadow-sm p-2 sm:p-3">
                <div className="px-4 sm:px-5 pt-4 pb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="title-caps text-2xl">{cat.title}</h4>
                  <span className="flex items-center gap-3 text-[11px] text-brand-600">
                    {cat.duration && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{cat.duration}</span>}
                    {cat.note && <span className="flex items-center gap-1"><RefreshCw className="w-3.5 h-3.5" />{cat.note}</span>}
                  </span>
                </div>
                {cat.items.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => pick(cat, item)}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="animate-pop w-full text-left group flex items-center gap-4 px-4 sm:px-5 py-3.5 rounded-2xl hover:bg-brand-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-brand-950 text-sm sm:text-base">{item.title}</span>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-champagne-dark bg-champagne-light px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3" /> Mais pedido
                          </span>
                        )}
                      </div>
                      {item.duration && <span className="text-[11px] text-brand-600">Tempo aproximado: {item.duration}</span>}
                    </div>
                    <span className="hidden sm:block flex-1 max-w-[80px] border-b border-dotted border-brand-300 translate-y-1" />
                    <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-800 whitespace-nowrap">{formatPrice(item.price)}</span>
                    <span className="w-9 h-9 shrink-0 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center group-hover:bg-brand-800 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </button>
                ))}
              </div>
            ))}
            <p className="flex items-center gap-2 text-[11px] text-brand-700 px-2">
              <Info className="w-3.5 h-3.5 shrink-0" />
              {studioConfig.paymentNote}
            </p>
          </div>
        </div>

        {/* Combo do Studio */}
        {combo && (
          <Reveal delay={100} className="mt-16">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-900 text-white p-7 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <Butterfly animate className="absolute -left-10 -bottom-12 w-48 h-48 opacity-15 pointer-events-none" />
              <div className="md:col-span-7 relative">
                <span className="text-[11px] uppercase tracking-[0.3em] text-champagne">As três juntas</span>
                <h3 className="font-serif text-4xl sm:text-5xl uppercase tracking-[0.05em] mt-2">{combo.title}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-brand-100">
                  {combo.items.map((it) => (
                    <li key={it} className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne" />{it}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-brand-200/80">{combo.note}</p>
              </div>
              <div className="md:col-span-5 relative md:text-right">
                <p className="text-xs text-brand-200">tudo por</p>
                <p className="font-serif text-6xl font-semibold">{formatPrice(combo.price).replace(',00', '')}</p>
                <button
                  onClick={() => onSelectProcedure(comboService)}
                  className="shine mt-5 inline-flex items-center gap-2 bg-champagne hover:bg-champagne-light text-brand-950 px-7 py-3.5 rounded-full font-semibold transition-all"
                >
                  Quero o combo
                </button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
