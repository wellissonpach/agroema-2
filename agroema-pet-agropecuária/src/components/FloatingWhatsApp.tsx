import React, { useState } from 'react';
import { STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  MessageCircle, 
  X, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCheck,
  ChevronRight,
  Phone
} from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickOptions = [
    {
      title: 'Consultar Ração para Pet',
      text: 'Olá! Gostaria de consultar marcas e preços de rações para cães ou gatos.',
    },
    {
      title: 'Dúvida sobre Farmácia / Antipulgas',
      text: 'Olá! Preciso de orientação sobre antipulgas / remédio para meu animal.',
    },
    {
      title: 'Linha Agro, Aves & Criação',
      text: 'Olá! Gostaria de saber sobre produtos para criação (aves, suínos, gado, rações).',
    },
    {
      title: 'Horário e Endereço da Loja',
      text: 'Olá! Gostaria de confirmar se a loja está aberta e o endereço exato.',
    },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    window.open(createWhatsAppLink(customMsg), '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Interactive WhatsApp Popover / Chat Card */}
      {isOpen && (
        <div 
          id="whatsapp-chat-popup"
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[92vw] max-w-sm bg-white rounded-3xl shadow-2xl border border-gray-200/90 overflow-hidden text-left animate-scale-up"
        >
          {/* Header */}
          <div className="bg-[#33452E] text-white p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#5D8C3A] flex items-center justify-center text-white font-extrabold text-sm">
                  EMA
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#33452E] absolute bottom-0 right-0"></span>
              </div>

              <div>
                <h4 className="font-heading text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Atendimento AgroEma</span>
                </h4>
                <p className="text-[11px] text-[#88B84A] font-medium">Online • Resposta rápida</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Fechar chat WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body with Simulated Chat Bubble */}
          <div className="p-4 bg-[#F5F6F2] space-y-3 max-h-[360px] overflow-y-auto">
            {/* Bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-xs text-[#20241F] space-y-1">
              <p className="font-bold text-[#33452E]">Olá! Seja muito bem-vindo(a) à AgroEma! 🐾</p>
              <p className="text-gray-600">Como podemos ajudar você e seus animais hoje? Escolha um assunto abaixo para agilizar seu atendimento:</p>
              <span className="text-[10px] text-gray-400 block text-right">Agora mesmo</span>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-1.5 pt-1">
              {quickOptions.map((opt, idx) => (
                <a
                  key={idx}
                  href={createWhatsAppLink(opt.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-[#5D8C3A] text-[#20241F] hover:text-white text-xs font-semibold border border-gray-200 hover:border-transparent transition-colors group"
                >
                  <span>{opt.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Custom Message Input Form */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Ou digite sua dúvida aqui..."
              className="flex-1 text-xs py-2 px-3 bg-[#F5F6F2] rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#5D8C3A]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[#5D8C3A] hover:bg-[#4d7530] text-white transition-colors shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button (Always on bottom right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
        {/* Tooltip on Desktop */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-white rounded-2xl shadow-lg border border-gray-200 text-xs font-bold text-[#33452E] cursor-pointer hover:bg-gray-50 transition-all transform hover:-translate-x-1"
        >
          <span className="w-2 h-2 rounded-full bg-[#5D8C3A] animate-ping" />
          <span>Fale conosco no WhatsApp</span>
        </div>

        {/* The Button */}
        <button
          id="floating-whatsapp-trigger"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir WhatsApp da AgroEma"
          className="relative w-14 h-14 rounded-2xl bg-[#5D8C3A] hover:bg-[#4d7530] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-7 h-7 fill-white/20" />
          
          {/* Red/Green Unread Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C8A43A] text-[#20241F] font-extrabold text-[11px] flex items-center justify-center border-2 border-white shadow">
            1
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div 
        id="mobile-bottom-bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200 p-2.5 px-4 flex items-center justify-between gap-3 shadow-lg"
      >
        <a
          id="mobile-bottom-whatsapp"
          href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#5D8C3A] text-white font-bold text-xs py-3 px-3 rounded-xl shadow active:scale-98"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp AgroEma</span>
        </a>

        <a
          id="mobile-bottom-maps"
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#F5F6F2] border border-gray-300 text-[#33452E] font-bold text-xs py-3 px-3.5 rounded-xl shrink-0"
        >
          <MapPin className="w-4 h-4 text-[#5D8C3A]" />
          <span>Como Chegar</span>
        </a>
      </div>
    </>
  );
};
