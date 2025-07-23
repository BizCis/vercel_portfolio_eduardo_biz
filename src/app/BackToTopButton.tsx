"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade in/out con transición
  // El botón siempre está en el DOM para animación, pero con opacity 0/1

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      tabIndex={0}
      title="Volver arriba"
      className={`fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#D5544E] to-[#5A2E2D] hover:from-[#5A2E2D] hover:to-[#D5544E] text-[#f4f4f5] rounded-full shadow-2xl p-2 md:p-3 transition-all border border-[#D5544E]/60 hover:border-[#f4f4f5] focus:outline-none focus:ring-2 focus:ring-[#D5544E] group
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        duration-300 ease-in-out scale-100 hover:scale-105`}
      style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.22)", transition: 'opacity 0.3s, box-shadow 0.3s, transform 0.2s' }}
    >
      {/* Ícono minimalista, círculo con flecha */}
      <span className="sr-only">Volver arriba</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-6 h-6 md:w-7 md:h-7 block mx-auto my-auto">
        <path d="M16 24V10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M9 17l7-7 7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* Tooltip */}
      <span className="absolute right-1/2 translate-x-1/2 bottom-16 md:bottom-20 bg-[#2D1F20] text-[#f4f4f5] text-xs md:text-sm rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-[#5A2E2D] whitespace-nowrap">
        Volver arriba
      </span>
    </button>
  );
}
