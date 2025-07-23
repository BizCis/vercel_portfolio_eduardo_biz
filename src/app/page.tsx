import BackToTopButton from "./BackToTopButton";
import AnalysisCard from "./AnalysisCard";
import React from "react";
export default function Home() {
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
          <div className="flex gap-2 sm:gap-4">
            <a href="#about" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#D5544E] hover:bg-[#5A2E2D] hover:text-[#f4f4f5]">About Me</a>
            <a href="#portfolio" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#5A2E2D] hover:bg-[#D5544E] hover:text-[#f4f4f5]">Portfolio</a>
            <a href="#contact" className="px-4 py-2 rounded-full font-semibold transition-all text-[#f4f4f5] bg-[#D5544E] hover:bg-[#5A2E2D] hover:text-[#f4f4f5]">Contact</a>
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-col items-center w-full pt-28 pb-16">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 w-full max-w-6xl mb-20 px-4 pt-12" id="hero">
          <h1 className="text-5xl font-extrabold tracking-tight text-center mb-4" style={{letterSpacing: '-0.04em'}}>Eduardo Cisneros Biz</h1>
          <p className="text-lg text-center max-w-xl mb-4 text-neutral-300">Data Analyst & Actuary. Explore my projects, music, T-shirt brand, and more.</p>
        </section>

        {/* About */}
        <section id="about" className="w-full mx-auto py-16 px-4 scroll-mt-24 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex flex-col items-start w-full md:w-1/3 md:pr-6 mb-8 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-left" style={{color: '#D5544E', lineHeight: '1.1'}}>About Me</h2>
              <div className="h-1 w-24 rounded-full mb-6" style={{background: 'linear-gradient(90deg, #D5544E 0%, #f4f4f5 100%)'}}></div>
              <img
                src="/Profile_photo_eduardo.jpg"
                alt="Eduardo Cisneros Biz profile"
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-[#D5544E] shadow-lg mb-4"
                style={{background: '#f4f4f5'}}
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
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 bg-gradient-to-br from-[#2D1F20] via-[#2D1F20]/90 to-black rounded-3xl shadow-2xl p-10 border border-[#5A2E2D]">
              <h3 className="text-2xl font-bold text-[#f4f4f5] mb-1">Eduardo Cisneros Biz</h3>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#D5544E] text-[#f4f4f5] shadow mb-2">Data Analyst</span>
              <p className="text-base text-[#f4f4f5] opacity-80 mb-2">Querétaro, México</p>
              <p className="text-lg text-[#f4f4f5] leading-relaxed">
                I'm a data analyst with over 6 years of experience transforming data into insights that drive smarter decisions. I specialize in end-to-end analytics — from cleaning and analyzing data to building dashboards and telling clear, compelling stories.
              </p>
              <p className="text-base text-[#f4f4f5] opacity-90">
                I work with tools like SQL, Excel, Tableau, Python, and macros, and I enjoy learning new technologies that make my work more efficient. One project I'm proud of: a Python script I built to detect bot activity, which helped reduce fraud and improve data quality.
              </p>
              <p className="text-base text-[#f4f4f5] opacity-90 mb-2">
                Above all, I’m driven by the impact data can have when it’s clear, accurate, and well communicated.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="w-full mx-auto py-16 px-4 scroll-mt-24 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex flex-col items-start md:items-start w-full md:w-1/3 md:pr-6 mb-8 md:mb-0">
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-left" style={{color: '#D5544E', lineHeight: '1.1'}}>Portfolio</h2>
              <div className="h-1 w-24 rounded-full mb-4" style={{background: 'linear-gradient(90deg, #D5544E 0%, #f4f4f5 100%)'}}></div>
            </div>
            <div className="flex-1 flex flex-col gap-8">
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
                <p>El resultado fue un modelo capaz de anticipar movimientos de precios con buena precisión, ayudando a tomar decisiones informadas. Si quieres ver el código o el análisis completo, ¡contáctame!</p>
              </AnalysisCard>
              {/* Aquí puedes agregar más tarjetas de análisis en el futuro */}
            </div>
          </div>
        </section>



        {/* Contact */}
        <section id="contact" className="w-full mx-auto py-12 px-4 scroll-mt-24 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#D5544E'}}>Contact</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-8 justify-center">
              <a href="https://www.linkedin.com/in/eduardo-cisneros-biz-580233190/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#D5544E] hover:text-[#f4f4f5] transition-colors font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><rect width="24" height="24" rx="4" fill="#D5544E"/><path d="M7.75 9.5V16.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7.75" cy="7.25" r="1.25" fill="#fff"/><path d="M10.75 12.5V16.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M13.25 16.25V12.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M16.25 16.25V13.75C16.25 12.5074 15.2426 11.5 14 11.5C12.7574 11.5 11.75 12.5074 11.75 13.75V16.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:educbiz11@gmail.com" className="flex items-center gap-2 text-[#f4f4f5] hover:text-[#D5544E] transition-colors font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><rect width="24" height="24" rx="4" fill="#5A2E2D"/><path d="M6 8.5L12 13L18 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="8.5" width="12" height="7" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
                <span>Email</span>
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
