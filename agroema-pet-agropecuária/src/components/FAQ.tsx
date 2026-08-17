import React, { useState } from 'react';
import { FAQ_DATA, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 md:py-24 bg-[#F5F6F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5D8C3A]/10 text-[#33452E] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#5D8C3A]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20241F] tracking-tight">
            Perguntas frequentes sobre a <span className="text-[#33452E]">AgroEma</span>
          </h2>

          <p className="text-base text-[#20241F]/70">
            Respostas diretas para você comprar com tranquilidade e comodidade.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 text-left">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen 
                    ? 'border-[#33452E]/40 shadow-sm' 
                    : 'border-[#33452E]/10 hover:border-[#5D8C3A]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#20241F] pr-2">
                    {item.question}
                  </span>
                  
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? 'bg-[#33452E] text-[#C8A43A] rotate-180' : 'bg-[#F5F6F2] text-[#33452E]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#33452E]/10 text-sm sm:text-base text-[#20241F]/80 leading-relaxed space-y-3 bg-[#F5F6F2]/30">
                    <p>{item.answer}</p>
                    
                    <div className="pt-2">
                      <a
                        href={createWhatsAppLink(`Olá! Tenho uma dúvida sobre: ${item.question}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5D8C3A] hover:text-[#33452E] transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Falar com atendente sobre esta dúvida</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#33452E]/10 text-center space-y-3 shadow-sm">
          <p className="text-sm font-bold text-[#33452E]">
            Ainda tem alguma dúvida sobre produtos, marcas ou entrega?
          </p>
          <a
            id="faq-direct-whatsapp-btn"
            href={createWhatsAppLink("Olá! Tenho uma dúvida que não encontrei no site, vocês podem me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5D8C3A] hover:bg-[#33452E] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
