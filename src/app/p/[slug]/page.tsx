import { proposals } from '@/data/proposals';
import Hero from '@/components/proposal/Hero';
import DestinationTabs from '@/components/proposal/DestinationTabs';
import WhatsAppCTA from '@/components/proposal/WhatsAppCTA';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

/**
 * Gera metadados dinâmicos com base no slug da proposta fornecido na URL. Se
 * nenhuma proposta corresponder, retorna um objeto vazio para evitar erros.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const proposal = proposals.find((p) => p.slug === params.slug);
  if (!proposal) {
    return {};
  }
  return {
    title: `${proposal.title} - Proposta de Viagem`,
    description: `Proposta de viagem: ${proposal.title}`,
  };
}

/**
 * Define os slugs que devem ser gerados estaticamente em build time. Isso
 * garante que todas as propostas estejam acessíveis via rotas estáticas.
 */
export function generateStaticParams() {
  return proposals.map((p) => ({ slug: p.slug }));
}

/**
 * Página principal da proposta. Recupera a proposta pelo slug e monta a
 * interface com o cabeçalho, abas de destinos e o CTA do WhatsApp. Se o
 * slug não existir, aciona a função notFound() do Next.js para renderizar
 * uma página 404.
 */
export default function ProposalPage({ params }: PageProps) {
  const proposal = proposals.find((p) => p.slug === params.slug);
  if (!proposal) {
    notFound();
  }
  // At this point, proposal is guaranteed to exist (not undefined)
  return (
    <div className="flex flex-col min-h-screen pb-32 sm:pb-0">
      <Hero title={proposal.title} />

      <section id="destinos" className="w-full px-0 py-8">
        <div className="px-0">
          <DestinationTabs
            destinations={proposal.destinations}
          />
        </div>
      </section>

      {/* CTA flutuante (mobile) + final (desktop) */}
      <WhatsAppCTA />
    </div>
  );
}
