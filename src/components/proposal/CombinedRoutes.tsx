import React from 'react';
import type { CombinedRoute } from '@/data/proposals';

interface CombinedRoutesProps {
  /** Lista de roteiros combinados a serem exibidos */
  routes: CombinedRoute[];
}

/**
 * Apresenta uma lista de sugestões de roteiros que combinam dois ou mais
 * destinos. É exibido após as abas de destinos para incentivar a
 * personalização da viagem.
 */
export default function CombinedRoutes({ routes }: CombinedRoutesProps) {
  if (!routes || routes.length === 0) return null;
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">Roteiros combinados</h4>
      <ul className="list-disc ml-5 space-y-1">
        {routes.map((route, idx) => (
          <li key={idx}>{route.description}</li>
        ))}
      </ul>
    </div>
  );
}