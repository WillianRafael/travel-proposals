"use client";

import React, { useRef, useState } from "react";
import type { StayOption } from "@/data/proposals";

interface WhereToStayProps {
  options: StayOption[];
}

export default function WhereToStay({ options }: WhereToStayProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const containerWidth = scrollContainerRef.current.offsetWidth;
    const slideIndex = Math.round(scrollLeft / containerWidth);
    setActiveSlide(slideIndex);
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-6 text-center">Onde ficar</h3>

      {/* Mobile: Carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
        >
          {options.map((option, idx) => (
            <div key={idx} className="flex-shrink-0 w-full snap-center">
              <StayCard option={option} />
            </div>
          ))}
        </div>

        {/* Indicadores de slide */}
        <div className="flex justify-center gap-2 mt-4">
          {options.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                activeSlide === idx ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const slideWidth = scrollContainerRef.current.offsetWidth;
                  scrollContainerRef.current.scrollLeft = idx * slideWidth;
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option, idx) => (
          <StayCard key={idx} option={option} />
        ))}
      </div>
    </div>
  );
}

function StayCard({ option }: { option: StayOption }) {
  const [imgIdx, setImgIdx] = useState(0);
  const tierColors = {
    economica: "bg-blue-100 text-blue-800",
    conforto: "bg-amber-100 text-amber-800",
    premium: "bg-purple-100 text-purple-800",
  } as const;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Imagem principal */}
      <div
        className="w-full h-48 sm:h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${option.images[imgIdx]})` }}
      />

      {/* Conteúdo */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-xl font-semibold font-serif text-amber-900">{option.name}</h4>
            <p className="text-sm text-amber-700">{option.type}</p>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-semibold ${tierColors[option.tier]}`}>
            {option.tier}
          </span>
        </div>

        <p className="text-sm text-amber-800 mb-3">{option.highlight}</p>

        {/* Estrelas */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-lg ${i < option.rating ? "text-amber-500" : "text-amber-200"}`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Mini-galeria se houver mais imagens */}
        {option.images && option.images.length > 1 && (
          <div className="flex gap-2 mb-3">
            {option.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`w-12 h-8 bg-cover bg-center rounded border ${i === imgIdx ? 'ring-2 ring-amber-300' : 'border-amber-200'}`}
                style={{ backgroundImage: `url(${src})` }}
                aria-label={`Ver imagem ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Preço */}
        <div className="pt-3 border-t border-amber-200">
          <p className="text-sm text-amber-900">R$ {option.pricePerNight.toLocaleString("pt-BR")} / noite</p>
          {option.priceNote && <p className="text-xs text-amber-700">({option.priceNote})</p>}
        </div>
      </div>
    </div>
  );
}
