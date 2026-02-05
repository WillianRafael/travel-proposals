import React from "react";

type Variant = "floating" | "inline";

export default function WhatsAppCTA({ variant = "floating" }: { variant?: Variant }) {
  const href =
    "https://wa.me/5541987711041?text=Oi!%20Gostei%20da%20proposta%20de%20viagem%20😊%20Podemos%20conversar?";

  // INLINE: aparece só onde você colocar (mobile only)
  if (variant === "inline") {
    return (
      <div className="sm:hidden mt-4 px-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 active:scale-[0.99]"
        >
          Conversar no WhatsApp
        </a>
      </div>
    );
  }

  // FLOATING (padrão)
  return (
    <>
      {/* Desktop normal */}
      <div className="hidden sm:block mt-12">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-emerald-700 active:scale-[0.99]"
        >
          Conversar no WhatsApp
        </a>
      </div>

      {/* Mobile fixo */}
      <div className="sm:hidden fixed inset-x-0 bottom-0 z-50">
        <div className="bg-white border-t border-black/10 px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 active:scale-[0.99]"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
