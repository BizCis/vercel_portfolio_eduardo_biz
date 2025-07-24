"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AutodeskAnalysisProject() {
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
            <Link href="/#about" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#D5544E]">About Me</Link>
            <Link href="/#portfolio" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#5A2E2D]">Portfolio</Link>
            <Link href="/#contact" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#5A2E2D]">Contact</Link>
          </div>
        )}
      </header>
      <main className="flex flex-col items-center w-full pt-28 px-4 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-center" style={{color: '#D5544E'}}>Autodesk Stock Analysis</h1>
        <div className="h-1 w-24 rounded-full mb-6 mx-auto" style={{background: 'linear-gradient(90deg, #D5544E 0%, #f4f4f5 100%)'}}></div>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start mx-auto mt-8">
          {/* Izquierda: Explicación */}
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <h2 className="text-2xl font-bold mb-2" style={{color: '#D5544E'}}>Predicting Autodesk Stock Prices with Python</h2>
            <h3 className="text-xl font-semibold mt-4 mb-1" style={{color: '#D5544E'}}>Problem:</h3>
            <p className="text-base text-[#f4f4f5] opacity-90 mb-2">Investors need to anticipate stock movements to make smarter decisions. Autodesk (ADSK), a leading design software company, reflects innovation—but like any stock, it&apos;s subject to market volatility. The goal was to predict future price behavior based on historical patterns, helping inform investment strategies.</p>
            <h3 className="text-xl font-semibold mt-4 mb-1" style={{color: '#D5544E'}}>Approach:</h3>
            <p className="text-base text-[#f4f4f5] opacity-90 mb-2">Using Python and linear regression, I analyzed Autodesk’s historical stock data to predict the next day’s closing price. The model used features like opening price, daily return, and trading volume. I also created visualizations to highlight trends and market behavior.</p>
            <h3 className="text-xl font-semibold mt-4 mb-1" style={{color: '#D5544E'}}>Results:</h3>
            <ul className="list-disc pl-6 mb-4 text-[#f4f4f5]">
              <li>Achieved a reliable regression model evaluated with R² and mean squared error.</li>
              <li>Forecasted ADSK stock prices for the next 10 business days, based on recent trends.</li>
              <li>Visualized actual vs. predicted prices, providing a clear view of the model&apos;s performance.</li>
              <li>Enabled a transferable framework for stock prediction that can be applied to other equities.</li>
            </ul>
            <p className="text-base text-[#f4f4f5] opacity-90 mb-2">This project shows how data-driven forecasting can support real financial decisions using simple yet effective tools in Python.</p>
            {/* Botón de GitHub pegado a la izquierda debajo de Results */}
            <div className="w-full flex justify-start mt-2">
              <a
                href="https://github.com/BizCis/predicting_stock_prices"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold bg-[#23272D] text-[#f4f4f5] hover:bg-[#337AA3] transition-all shadow border border-[#D5544E]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f4f4f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                GitHub Repo
              </a>
            </div>
          </div>
          {/* Derecha: Imágenes */}
          <div className="flex flex-col items-center justify-start gap-6 w-full">
            <Image src="/autodesk_daily_returns.png" alt="Daily Returns" width={400} height={180} className="rounded-xl shadow border border-[#D5544E] object-cover mb-4" />
            <Image src="/autodesk_price_predictions.png" alt="Price Predictions for Autodesk" width={400} height={220} className="rounded-xl shadow border border-[#D5544E] object-cover mb-4" />
            <Image src="/autodesk_prices_and_predictions.png" alt="Prices and Predictions for Autodesk" width={400} height={180} className="rounded-xl shadow border border-[#D5544E] object-cover mb-4" />
          </div>
        </div>
      </main>
    </div>
  );
}
