"use client";

import React, { useState } from 'react';
import type { Destination } from '@/data/proposals';
import DestinationPanel from './DestinationPanel';

interface DestinationTabsProps {
  /** Lista de destinos disponíveis para a proposta */
  destinations: Destination[];
}

/**
 * Componente de abas acessíveis que permite alternar entre diferentes
 * destinos. Cada aba corresponde a um destino e ao clicar o conteúdo é
 * atualizado sem alterar o layout geral da página.
 */
export default function DestinationTabs({ destinations }: DestinationTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full space-y-8">
      <div role="tablist" aria-label="Destinos" className="flex flex-wrap gap-1 sm:gap-2 mb-4 justify-center">
        {destinations.map((dest, idx) => {
          const isActive = active === idx;
          return (
            <button
              key={dest.slug}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${dest.slug}`}
              onClick={() => setActive(idx)}
              className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-500 hover:text-blue-600 hover:shadow-sm border border-transparent'
              }`}
            >
              {dest.name}
            </button>
          );
        })}
      </div>
      {/* Renderiza painéis, mas mantém o layout estável ocultando os inativos */}
      {destinations.map((dest, idx) => (
        <div
          key={dest.slug}
          id={`panel-${dest.slug}`}
          role="tabpanel"
          aria-labelledby={dest.slug}
          hidden={active !== idx}
          className="mt-4"
        >
          {active === idx && <DestinationPanel destination={dest} />}
        </div>
      ))}

      {/* Espaço para o CTA fixo no mobile não cobrir conteúdo */}
      <div className="h-24 sm:hidden" />
    </div>
  );
}