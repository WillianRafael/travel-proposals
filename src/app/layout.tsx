import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Proposta de Viagem',
  description: 'Proposta de viagem personalizada',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-gray-900">
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
