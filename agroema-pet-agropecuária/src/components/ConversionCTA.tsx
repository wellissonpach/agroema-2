import React from 'react';
import { STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  MessageCircle, 
  PhoneCall, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ConversionCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#33452E] text-white relative overflow-hidden">
      {/* Geometric quadrant accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D8C3A]/20 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8A43A]/15 rounded-tr-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Accent Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#88B84A] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A43A]" />
          <span>Atendimento Ágil &amp; Sem Burocracia</span>
        </div>

        {/* Big Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Precisando de algum produto para seus <span className="text-[#88B84A]">animais</span> ou sua <span className="text-[#C8A43A]">criação</span>?
          </h2>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed">
            Fale com a <strong>AgroEma</strong> agora mesmo pelo WhatsApp e descubra as opções disponíveis, preços especiais e tire dúvidas com quem entende.
          </p>
        </div>

        {/* Buttons with Geometric Pill Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            id="prefooter-whatsapp-cta"
            href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#5D8C3A] hover:bg-[#88B84A] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6 fill-white/20" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <a
            id="prefooter-call-cta"
            href={`tel:${STORE_INFO.whatsappClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-4 rounded-full border border-white/20 transition-colors"
          >
            <PhoneCall className="w-5 h-5 text-[#C8A43A]" />
            <span>Ligar: {STORE_INFO.phone}</span>
          </a>
        </div>

        {/* Trust Badges below CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#88B84A]" />
            <span>Resposta rápida no horário comercial</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#88B84A]" />
            <span>Separação prévia de mercadorias</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#88B84A]" />
            <span>Pagamento fácil via Pix ou Cartão</span>
          </span>
        </div>

      </div>
    </section>
  );
};
