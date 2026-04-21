"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {hovered && (
        <div className="relative">
          <div className="bg-white text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl shadow-black/20 whitespace-nowrap">
            Pergunte qualquer coisa
          </div>
          <div className="absolute bottom-0 right-5 translate-y-full w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white" />
        </div>
      )}
      <a
        href="https://wa.me/5521967472172?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20estrutura%20de%20captação."
        target="_blank"
        rel="noreferrer"
        aria-label="Pergunte qualquer coisa no WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl shadow-black/30 text-white transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
      </a>
    </div>
  );
}
