import React from 'react';
import Image from 'next/image';
import type { Destination } from '@/data/proposals';
import { AccordionItem } from '@/components/ui/Accordion';
import WhereToStay from './WhereToStay';
import TripInvestmentSummary from './TripInvestmentSummary';
import CostAccordion from './CostAccordion';

interface DestinationPanelProps {
  /** Destino a ser renderizado */
  destination: Destination;
}

function cleanText(input: string) {
  // remove blocos tipo 【...】 e também [ ... ] se você quiser
  return input
    .replace(/【[^】]*】/g, "")     // remove 【...】
    .replace(/\s{2,}/g, " ")      // limpa espaços duplos
    .trim();
}


/**
 * Painel que apresenta os detalhes de um destino específico, incluindo
 * imagem, justificativa, clima, prós, contras, custos e itinerário. Este
 * componente é renderizado dentro de uma aba ativa e utiliza o componente
 * `next/image` para otimização automática das imagens.
 */
export default function DestinationPanel({ destination }: DestinationPanelProps) {
  return (
    <div className="space-y-8 lg:space-y-10">
      {/* Imagem do destino */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Conteúdo textual */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-center">{destination.name}</h3>

        {/* Resumo curto (sempre visível) */}
        <p className="mb-4 whitespace-pre-line leading-relaxed">{cleanText(destination.whyGo)}</p>

        {/* Por que ir (bullets) sempre visível */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-center">Por que ir</h4>
          <ul className="list-disc pl-5 space-y-1 text-black/80 mb-4">
            {destination.pros.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Onde ficar (novo componente) */}
        <div className="py-8">
          <WhereToStay options={destination.stayOptions} />
        </div>

        {/* Accordion: mobile fechado por padrão */}
        <div className="space-y-3">
          <AccordionItem title="Clima">
            <p className="text-black/80 leading-relaxed whitespace-pre-line">{cleanText(destination.weather)}</p>
          </AccordionItem>

          <AccordionItem title="Pontos a considerar">
            <ul className="list-disc pl-5 space-y-1 text-black/80">
              {destination.cons.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Itinerário sugerido">
            <ul className="list-disc pl-5 space-y-1 text-black/80">
              {destination.itineraryDays.map((dayObj, idx) => (
                <li key={idx}>
                  <strong>{dayObj.day}:</strong> {dayObj.description}
                </li>
              ))}
            </ul>
          </AccordionItem>
        </div>

        {/* Detalhamento de custos (penúltimo) */}
        <div className="py-8">
          <CostAccordion costs={destination.costBreakdown} />
        </div>

        {/* Resumo do investimento (último) */}
        <div className="py-8">
          <TripInvestmentSummary summary={destination.tripSummary} />
        </div>
      </div>
    </div>
  );
}