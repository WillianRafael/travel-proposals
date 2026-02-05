"use client";

import React from "react";

interface HeroProps {
  travelerName: string;
  title?: string;        // opcional: título da proposta
  subtitle?: string;     // opcional: linha menor (ex: "Janeiro 2026")
  ctaLabel?: string;     // opcional: texto do botão
}

export default function Hero({
  travelerName,
  title = "Experiência Premium",
  subtitle = "Fevereiro 2026",
  ctaLabel = "Ver o roteiro completo",
}: HeroProps) {
  const onScrollToDestinos = () => {
    const el = document.getElementById("destinos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative h-[280px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden flex items-center border border-[rgb(var(--line))] bg-white shadow-sm">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/cover.jpg"
          alt="Imagem de capa"
          className="h-full w-full object-cover"
        />
        {/* overlay (véu premium) - mais forte no mobile, mais suave no desktop */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-black/65 via-black/40 to-black/25 sm:from-black/45 sm:via-black/25 sm:to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 text-center h-full flex items-center justify-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-white font-semibold text-3xl sm:text-5xl leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-white/85 text-sm sm:text-lg max-w-[46ch]">
            Uma viagem pensada nos mínimos detalhes para você.
          </p>

          {/* Desktop only: data bem discreta */}
          <p className="hidden sm:block text-[11px] tracking-[0.25em] uppercase text-white/70 mb-3">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
