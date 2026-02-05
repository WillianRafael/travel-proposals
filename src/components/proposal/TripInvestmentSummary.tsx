"use client";

import React from "react";
import type { TripSummary } from "@/data/proposals";

interface TripInvestmentSummaryProps {
  summary: TripSummary;
}

export default function TripInvestmentSummary({
  summary,
}: TripInvestmentSummaryProps) {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-6 text-center font-serif text-amber-900">Investimento estimado</h3>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="space-y-4 font-serif text-amber-900">
          {/* Trip details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-amber-200">
            <div>
              <p className="text-xs sm:text-sm text-black/60 uppercase tracking-wide">
                Destino
              </p>
              <p className="text-lg sm:text-xl font-semibold mt-1">
                {summary.destinationLabel}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-black/60 uppercase tracking-wide">
                Duração
              </p>
              <p className="text-lg sm:text-xl font-semibold mt-1">
                {summary.days} dias
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-black/60 uppercase tracking-wide">
                Pernoites
              </p>
              <p className="text-lg sm:text-xl font-semibold mt-1">
                {summary.nights} noites
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-black/60 uppercase tracking-wide">
                Viajantes
              </p>
              <p className="text-lg sm:text-xl font-semibold mt-1">
                {summary.peopleLabel}
              </p>
            </div>
          </div>

          {/* Estimate */}
          <div className="pt-4">
            <p className="text-xs text-amber-700 uppercase tracking-wide mb-2 whitespace-nowrap">
              Orçamento estimado
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-900">
              R$ {summary.estimateMin.toLocaleString("pt-BR")} – {" "}
              R$ {summary.estimateMax.toLocaleString("pt-BR")}
            </p>
          </div>

          {/* Disclaimer */}
          <div className="pt-4 border-t border-amber-200">
            <p className="text-xs sm:text-sm text-black/60 italic">
              {summary.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
