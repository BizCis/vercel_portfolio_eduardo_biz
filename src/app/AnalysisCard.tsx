"use client";
import React, { useState } from "react";

interface AnalysisCardProps {
  title: string;
  date: string;
  summary: string;
  children: React.ReactNode;
}

export default function AnalysisCard({ title, date, summary, children }: AnalysisCardProps) {
  // Mapeo manual para rutas conocidas
  const slugMap: Record<string, string> = {
    'Dinemo Finance: Classify Your Expenses and Improve Your Personal Finances (Development)': 'dinemo-finance',
    "Exploring Financial Predictions with Python: A Deep Dive into Autodesk's Stock": 'exploring-financial-predictions-with-python-a-deep-dive-into-autodesk-s-stock',
  };
  const slug = slugMap[title] || title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const isDinemo = slug === 'dinemo-finance';
  return (
    <a
      href={`/project/${slug}`}
      className="group bg-gradient-to-br from-[#2D1F20] via-[#2D1F20]/90 to-black border border-[#5A2E2D] rounded-2xl shadow-xl p-8 hover:scale-[1.025] transition-transform cursor-pointer relative block"
      style={{ textDecoration: 'none' }}
    >
      <h3 className={`text-2xl font-bold mb-2 text-left ${isDinemo ? 'text-[#2DA066]' : 'text-[#D5544E]'}`}>{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-base text-[#f4f4f5] opacity-90 mb-2 line-clamp-4">{summary}</p>
      <span className={`inline-block mt-2 font-semibold group-hover:underline transition-colors ${isDinemo ? 'text-[#2DA066]' : 'text-[#D5544E]'}`}>View complete project →</span>
    </a>
  );
}
