"use client";
import React, { useState } from "react";

interface AnalysisCardProps {
  title: string;
  date: string;
  summary: string;
  children: React.ReactNode;
}

export default function AnalysisCard({ title, date, summary, children }: AnalysisCardProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="group bg-gradient-to-br from-[#2D1F20] via-[#2D1F20]/90 to-black border border-[#5A2E2D] rounded-2xl shadow-xl p-8 hover:scale-[1.025] transition-transform cursor-pointer relative" onClick={() => setShow(true)}>
      <h3 className="text-2xl font-bold text-[#D5544E] mb-2 text-left">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-base text-[#f4f4f5] opacity-90 mb-2 line-clamp-4">{summary}</p>
      <span className="inline-block mt-2 text-[#D5544E] font-semibold group-hover:underline">Ver análisis completo →</span>
      {show && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 rounded-2xl p-8 animate-fade-in" onClick={e => { e.stopPropagation(); }}>
          <div className="max-w-2xl w-full bg-[#2D1F20] border border-[#5A2E2D] rounded-2xl shadow-2xl p-8 relative">
            <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-[#D5544E] hover:text-[#f4f4f5] text-2xl font-bold" aria-label="Cerrar">×</button>
            <h3 className="text-2xl font-bold text-[#D5544E] mb-4">{title}</h3>
            <p className="text-base text-[#f4f4f5] mb-4">{date}</p>
            <div className="text-[#f4f4f5] space-y-4 text-base">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
