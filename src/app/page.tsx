"use client";
import BackToTopButton from "./BackToTopButton";
import AnalysisCard from "./AnalysisCard";
import React, { useState } from "react";
import Image from "next/image";
export default function Home() {
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
            <a href="#about" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#5A2E2D] hover:bg-[#D5544E] hover:text-[#f4f4f5]">About Me</a>
            <a href="#portfolio" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#5A2E2D] hover:bg-[#D5544E] hover:text-[#f4f4f5]">Portfolio</a>
            <a href="#contact" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#5A2E2D] hover:bg-[#D5544E] hover:text-[#f4f4f5]">Contact</a>
          </div>
        </nav>
        {/* Menú desplegable en móvil */}
        {menuOpen && (
          <div className="sm:hidden w-full bg-[#2D1F20] border-t border-[#5A2E2D] flex flex-col items-center py-2 animate-fade-in">
            <a href="#about" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#23272D]">About Me</a>
            <a href="#portfolio" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#5A2E2D]">Portfolio</a>
            <a href="#contact" className="w-full text-center py-2 font-semibold text-[#f4f4f5] hover:bg-[#5A2E2D]">Contact</a>
          </div>
        )}
      </header>

      {/* Contenido principal */}

      <main className="flex flex-col items-center w-full pt-28 pb-16">
        {/* Hero */}
        <section
          className="flex flex-col items-center gap-6 w-full max-w-6xl px-4"
          id="hero"
          style={{
            minHeight: 'calc(40vh - 56px)', // 40% de la altura de la ventana menos la barra
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '48px', // espacio desde la barra
            paddingBottom: '48px', // espacio hacia el about
          }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-center mb-4" style={{letterSpacing: '-0.04em'}}>Eduardo Cisneros Biz</h1>
          <p className="text-lg text-center max-w-xl mb-4 text-neutral-300">Data Analyst & Actuary. Turning data into action through real-world projects.</p>
        </section>

        {/* About */}
        <section id="about" className="w-full mx-auto py-16 px-4 scroll-mt-24 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex flex-col items-center w-full md:w-1/3 md:pr-6 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-center break-words" style={{color: '#D5544E', lineHeight: '1.1'}}>About Me</h2>
              <div className="h-1 w-24 rounded-full mb-6 mx-auto" style={{background: 'linear-gradient(90deg, #D5544E 0%, #f4f4f5 100%)'}}></div>
              <div className="flex flex-col items-center w-full">
                <Image
                  src="/Profile_photo_eduardo.jpg"
                  alt="Eduardo Cisneros Biz profile"
                  width={176}
                  height={176}
                  className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-[#D5544E] shadow-lg mb-4"
                  style={{background: '#f4f4f5'}}
                  priority
                />
                <a
                  href="/2_Eduardo_Cisneros_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-[#D5544E] text-[#f4f4f5] shadow-lg hover:bg-[#5A2E2D] hover:text-[#f4f4f5] transition-all border-2 border-[#5A2E2D] mt-2 text-lg"
                >
                  <span>View my CV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v6.75m9 0V17.25A2.25 2.25 0 0114.25 19.5h-4.5A2.25 2.25 0 017.5 17.25V13.5m9 0h-9" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 bg-gradient-to-br from-[#2D1F20] via-[#2D1F20]/90 to-black rounded-3xl shadow-2xl p-10 border border-[#5A2E2D]">
              <h3 className="text-2xl font-bold text-[#f4f4f5] mb-1">Eduardo Cisneros Biz</h3>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#D5544E] text-[#f4f4f5] shadow mb-2">Data Analyst</span>
              <p className="text-base text-[#f4f4f5] opacity-80 mb-2">Querétaro, México</p>
              <div className="w-full flex flex-col gap-4">
                <p className="text-lg text-[#f4f4f5] leading-relaxed w-full text-justify">
                  I&apos;m a data analyst with over 6 years of experience transforming data into insights that drive smarter decisions. I specialize in end-to-end analytics — from cleaning and analyzing data to building dashboards and telling clear, compelling stories.
                </p>
                <p className="text-base text-[#f4f4f5] opacity-90 w-full text-justify">
                  I work with tools like SQL, Excel, Tableau, Python, and macros, and I enjoy learning new technologies that make my work more efficient. One project I&apos;m proud of: a Python script I built to detect bot activity, which helped reduce fraud and improve data quality.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Portfolio */}
        <section id="portfolio" className="w-full mx-auto py-16 px-4 scroll-mt-24 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <div className="flex flex-col items-start md:items-start w-full md:w-1/3 md:pr-6 mb-6 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-center md:text-left break-words" style={{color: '#D5544E', lineHeight: '1.1'}}>Portfolio</h2>
              <div className="h-1 w-24 rounded-full mb-4" style={{background: 'linear-gradient(90deg, #D5544E 0%, #f4f4f5 100%)'}}></div>
            </div>
            <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full">
              <AnalysisCard
                title={'Dinemo Finance: Classify Your Expenses and Improve Your Personal Finances (Development)'}
                date={'Published on July 23, 2025'}
                summary={'Dinemo Finance is a web platform designed to help you classify expenses from your bank statement, making it easier to analyze and manage your personal finances. The project is available on GitHub and aims to simplify financial organization for everyone.'}
              >
                <p>Dinemo Finance was created to help people better understand where their money goes. The platform lets you upload your bank statement and, using both automatic and manual classification tools, group your expenses into categories like food, transportation, entertainment, and more.</p>
                <ul className={'list-disc pl-6'}>
                  <li>Upload your bank statement in a compatible format.</li>
                  <li>Classify your expenses automatically or manually.</li>
                  <li>View summaries and charts to understand your financial habits.</li>
                  <li>Export your results for better tracking.</li>
                </ul>
                <p>The goal is to help anyone make more informed decisions about their personal finances. You can view the code and try the platform on <a href={'https://github.com/BizCis/Dinemo_Finance'} target={'_blank'} rel={'noopener noreferrer'} className={'underline text-[#337AA3] hover:text-[#2563eb]'}>GitHub</a>.</p>
              </AnalysisCard>
              <AnalysisCard
                title="Exploring Financial Predictions with Python: A Deep Dive into Autodesk's Stock"
                date="Publicado el 5 de febrero de 2024"
                summary="In the realm of financial analysis and prediction, Python emerges as a powerful tool, offering clarity and precision in navigating the complexities of stock market data. This post delves into a comprehensive Python script designed to analyze and predict Autodesk's stock prices, leveraging a variety of data science and machine learning techniques."
              >
                <p>En el ámbito del análisis y la predicción financiera, Python se destaca como una herramienta poderosa, ofreciendo claridad y precisión para navegar la complejidad de los datos bursátiles. Este análisis explora un script de Python diseñado para analizar y predecir los precios de las acciones de Autodesk, utilizando técnicas de ciencia de datos y machine learning.</p>
                <p>El proceso incluyó:</p>
                <ul className="list-disc pl-6">
                  <li>Obtención y limpieza de datos históricos de precios.</li>
                  <li>Análisis exploratorio para identificar tendencias y patrones.</li>
                  <li>Construcción de modelos predictivos (regresión, ARIMA, etc.).</li>
                  <li>Visualización de resultados y validación de predicciones.</li>
                </ul>
                <p>El resultado fue un modelo capaz de anticipar movimientos de precios con buena precisión, ayudando a tomar decisiones informadas. If you want to view the complete project, contact me!</p>
              </AnalysisCard>
              {/* Aquí puedes agregar más tarjetas de análisis en el futuro */}
            </div>
          </div>
        </section>



        {/* Contact */}
        <section id="contact" className="w-full mx-auto py-12 px-4 scroll-mt-24 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center break-words" style={{color: '#D5544E'}}>Contact</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-6 md:gap-10 justify-center flex-wrap">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/eduardo-cisneros-biz-580233190/" target="_blank" rel="noopener noreferrer" className="group">
                <span className="w-16 h-16 rounded-full flex items-center justify-center bg-[#337AA3] hover:bg-[#2563eb] transition-colors shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white"><rect width="32" height="32" rx="16" fill="none"/><path d="M12.667 13.333h2.666v1.333h.04c.373-.707 1.286-1.453 2.646-1.453 2.826 0 3.354 1.867 3.354 4.293v4.16h-2.667v-3.68c0-.88-.016-2.013-1.227-2.013-1.227 0-1.414.96-1.414 1.953v3.74h-2.667v-8.333zm-4 0h2.667v8.333h-2.667v-8.333zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667z"/></svg>
                </span>
              </a>
              {/* GitHub */}
              <a href="https://github.com/BizCis" target="_blank" rel="noopener noreferrer" className="group">
                <span className="w-16 h-16 rounded-full flex items-center justify-center bg-[#23272D] hover:bg-[#5A2E2D] transition-colors shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#F6F8FA"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </span>
              </a>
              {/* Email */}
              <a href="mailto:educbiz11@gmail.com" className="group">
                <span className="w-16 h-16 rounded-full flex items-center justify-center bg-[#5A2E2D] hover:bg-[#D5544E] transition-colors shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="12" fill="#5A2E2D"/><path d="M6 8.5L12 13L18 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="8.5" width="12" height="7" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <BackToTopButton />
      <footer className="text-xs mt-auto mb-4 text-center opacity-70" style={{color: '#5A2E2D'}}>© {new Date().getFullYear()} Eduardo Cisneros Biz</footer>
    </div>
  );
}
