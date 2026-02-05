"use client";

import React from "react";
import type { CostBreakdown } from "@/data/proposals";
import { AccordionItem } from "@/components/ui/Accordion";

interface CostAccordionProps {
  costs: CostBreakdown;
}

export default function CostAccordion({ costs }: CostAccordionProps) {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-6 text-center">Detalhamento de custos</h3>

      <div className="space-y-3">
        <AccordionItem title="Transporte" defaultOpen={false}>
          <ul className="list-disc pl-5 space-y-2 text-black/80">
            {costs.transport.map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="Hospedagem" defaultOpen={false}>
          <ul className="list-disc pl-5 space-y-2 text-black/80">
            {costs.lodging.map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="Alimentação" defaultOpen={false}>
          <ul className="list-disc pl-5 space-y-2 text-black/80">
            {costs.food.map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        {costs.paidTours && costs.paidTours.length > 0 && (
          <AccordionItem title="Passeios e atividades pagas" defaultOpen={false}>
            <ul className="list-disc pl-5 space-y-2 text-black/80">
              {costs.paidTours.map((item, idx) => (
                <li key={idx} className="text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </AccordionItem>
        )}

        {costs.additionalCosts && costs.additionalCosts.length > 0 && (
          <AccordionItem title="Custos adicionais a considerar" defaultOpen={false}>
            <div className="space-y-3 text-black/80">
              <ul className="list-disc pl-5 space-y-2">
                {costs.additionalCosts.map((item, idx) => (
                  <li key={idx} className="text-sm sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-black/60 pt-2">
                Valores aproximados, sujeitos a variação conforme temporada e demanda.
              </p>
            </div>
          </AccordionItem>
        )}
      </div>
    </div>
  );
}
