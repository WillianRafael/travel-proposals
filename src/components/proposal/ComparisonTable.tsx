import React from 'react';
import type { ComparisonRow } from '@/data/proposals';

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  if (!rows || rows.length === 0) return null;

  return (
    <section className="mt-8">
      <h4 className="text-lg font-semibold mb-2">Comparação dos destinos</h4>

      {/* “Gutter” mobile + scroll horizontal suave */}
      <div className="-mx-4 sm:mx-0">
        <div className="overflow-x-auto px-4 sm:px-0">
          <table className="w-full min-w-[720px] text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2 border-b">Atributo</th>
                <th className="text-left p-2 border-b">Ilha do Mel</th>
                <th className="text-left p-2 border-b">Morretes</th>
                <th className="text-left p-2 border-b">Capivari</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-2 border-b font-medium whitespace-normal md:whitespace-nowrap">
                    {row.attribute}
                  </td>
                  <td className="p-2 border-b whitespace-normal md:whitespace-nowrap">
                    {row.ilhaDoMel}
                  </td>
                  <td className="p-2 border-b whitespace-normal md:whitespace-nowrap">
                    {row.morretes}
                  </td>
                  <td className="p-2 border-b whitespace-normal md:whitespace-nowrap">
                    {row.capivari}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
