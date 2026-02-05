"use client";

import React, { useEffect, useState } from "react";

export function AccordionItem({
  title,
  children,
  defaultOpen,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    // defaultOpen explicitly controls initial state; otherwise open on desktop by default
    if (typeof defaultOpen === "boolean") {
      setOpen(defaultOpen);
    } else {
      // open on desktop (sm+) by default
      if (typeof window !== "undefined") {
        setOpen(window.innerWidth >= 640);
      }
    }
  }, [defaultOpen]);

  return (
    <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold">{title}</span>
        <span className="text-black/50">{open ? "–" : "+"}</span>
      </button>

      <div className={open ? "px-4 pb-4" : "hidden sm:block px-4 pb-4"}>
        {children}
      </div>
    </div>
  );
}
