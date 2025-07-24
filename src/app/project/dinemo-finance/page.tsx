"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DinemoFinanceProject() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-[#f4f4f5] font-sans">
      {/* Encabezado fijo con textura marfil */}
      <header
        className="fixed top-0 left-0 w-full z-50 border-b border-[#5A2E2D] backdrop-blur-sm"
        style={{
          backgroundColor: '#2D1F20',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width=\"100%25\" height=\"100%25\" xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"noise\" x=\"0\" y=\"0\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%25\" height=\"100%25\" fill=\"%232D1F20\"/><rect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.10\"/></svg>')`,
          backgroundRepeat: 'repeat',
        }}
      >
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-xl font-bold tracking-tight" style={{color: '#D5544E'}}>Eduardo Cisneros Biz</span>
          {/* Hamburguesa solo en móvil */}
          <button
            className="sm:hidden ml-auto p-2 rounded focus:outline-none"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D5544E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          {/* Menú horizontal en escritorio */}
          <div className="hidden sm:flex gap-2 sm:gap-4 ml-auto">
            <Link href="/" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#23272D] hover:bg-[#337AA3] hover:text-[#f4f4f5]">Home</Link>
            <Link href="/#about" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#5A2E2D] hover:bg-[#D5544E] hover:text-[#f4f4f5]">About Me</Link>
            <Link href="/#portfolio" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#5A2E2D] hover:bg-[#D5544E] hover:text-[#f4f4f5]">Portfolio</Link>
            <Link href="/#contact" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#5A2E2D] hover:bg-[#D5544E] hover:text-[#f4f4f5]">Contact</Link>
          </div>
        </nav>
        {/* Menú desplegable en móvil */}
        {menuOpen && (
          <div className="sm:hidden w-full bg-[#2D1F20] border-t border-[#5A2E2D] flex flex-col items-center py-2 animate-fade-in">
            <Link href="/" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#23272D]">Home</Link>
            <Link href="/#about" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#5A2E2D]">About Me</Link>
            <Link href="/#portfolio" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#5A2E2D]">Portfolio</Link>
            <Link href="/#contact" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#5A2E2D]">Contact</Link>
          </div>
        )}
      </header>
      <main className="flex flex-col items-center w-full pt-24 px-2 sm:px-4 pb-10">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 text-center" style={{color: '#2DA066'}}>Dinemo Finance (Development)</h1>
      <div className="h-1 w-20 sm:w-24 rounded-full mb-6 sm:mb-8 mx-auto" style={{background: 'linear-gradient(90deg, #2DA066 0%, #f4f4f5 100%)'}}></div>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 sm:gap-12 items-start justify-start mx-auto">
        {/* Izquierda: Explicación */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 items-start justify-start w-full">
          <h2 className="text-2xl font-bold mb-2" style={{color: '#2DA066'}}>Objective</h2>
          <p className="text-lg text-[#f4f4f5] opacity-90 mb-2">Dinemo Finance aims to help users better understand and organize their personal finances by classifying expenses from bank statements.</p>
          <h3 className="text-xl font-semibold mb-2" style={{color: '#2DA066'}}>How it works</h3>
          <ul className="list-disc pl-6 mb-4 text-[#f4f4f5]">
            <li>Upload your bank statement in a compatible format.</li>
            <li>Classify your expenses automatically or manually.</li>
            <li>View summaries and charts to understand your financial habits.</li>
            <li>Export your results for better tracking.</li>
          </ul>
          <p className="text-base text-[#f4f4f5] opacity-80">Currently in development. For more details and code, visit the repository.</p>
        </div>
        {/* Derecha: Imagen y botón */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full">
          {/* Logotipo Dinemo */}
          <Image src="/dino_finance_logo.png" alt="Dinemo Finance Logo" width={220} height={220} className="rounded-xl shadow border border-[#2DA066] object-contain mb-2 bg-[#f4f4f5]" />
          <a href="https://github.com/BizCis/Dinemo_Finance" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 bg-[#24292F] text-[#F6F8FA] hover:bg-[#0366D6] transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#F6F8FA"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            Visit Repository
          </a>
        </div>
      </div>
      </main>
    </div>
  );
}
