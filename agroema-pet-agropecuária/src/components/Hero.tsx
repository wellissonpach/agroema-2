import React from 'react';
import { STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  MessageCircle, 
  Store, 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  Truck, 
  MapPin,
  ChevronRight,
  Phone,
  Package
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-[#F5F6F2] overflow-hidden">
      {/* Main Split Geometric Hero */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[560px]">
          
          {/* Left Column: Dark Forest Block with Geometric Balance */}
          <div className="lg:col-span-7 bg-[#33452E] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden text-left">
            {/* Geometric Quarter-Circle Graphic in Top-Right */}
            <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-[#C8A43A] opacity-10 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#5D8C3A] opacity-10 rounded-tr-full pointer-events-none" />

            {/* Geometric Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#C8A43A] tracking-wider uppercase mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-[#88B84A] animate-pulse"></span>
              <span>Sua parceira no campo e na cidade</span>
            </div>

            {/* Main Headline with Italic Gold Accent */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
              Tudo para cuidar dos seus <span className="text-[#C8A43A] italic font-serif">animais</span> em um só lugar.
            </h1>

            {/* Subtitle */}
            <p className="text-[#F5F6F2]/80 text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-normal">
              Produtos selecionados, nutrição para criações, farmácia veterinária e atendimento próximo para quem cuida dos seus animais todos os dias com dedicação.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                id="hero-primary-whatsapp-btn"
                href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8A43A] hover:bg-[#b5922e] text-[#20241F] px-8 py-4 rounded-xl font-extrabold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-[#20241F]/20 text-[#20241F]" />
                <span>Falar no WhatsApp</span>
              </a>

              <a
                id="hero-secondary-explore-btn"
                href="#produtos"
                className="border border-white/30 hover:border-white text-white hover:bg-white/10 px-7 py-4 rounded-xl font-bold text-base transition-all duration-150 flex items-center justify-center gap-2"
              >
                <Store className="w-5 h-5 text-[#88B84A]" />
                <span>Ver Categorias</span>
              </a>
            </div>

            {/* Quick Geometric Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/80">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#88B84A] shrink-0" />
                <span>Pronta entrega</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C8A43A] shrink-0" />
                <span>100% Originais</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Truck className="w-4 h-4 text-[#88B84A] shrink-0" />
                <span>Retirada &amp; Entrega</span>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Sand / Geometric Dot Stage with Tilted Balanced Showcase Card */}
          <div className="lg:col-span-5 bg-[#E8EAE2] relative overflow-hidden p-8 sm:p-12 flex items-center justify-center min-h-[380px]">
            {/* Geometric Background Dot Grid Pattern */}
            <div className="absolute inset-0 bg-geometric-dots opacity-20 pointer-events-none" />

            {/* Showcase Floating Frame with Geometric Rotation */}
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border-4 border-white rotate-2 sm:rotate-3 transition-transform duration-300 hover:rotate-0 flex flex-col overflow-hidden relative z-10">
              
              {/* Photo Area */}
              <div className="relative h-64 sm:h-72 bg-[#5D8C3A]/10 overflow-hidden">
                <img
                  src="/backgroundhero.png"
                  alt="AgroEma - Cuidado animal e atendimento no balcão"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#33452E]/80 via-transparent to-black/10" />

                {/* Floating Tag inside card */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-lg bg-[#33452E] text-[#C8A43A] text-xs font-bold uppercase tracking-wider shadow-md">
                    Linha Pet &amp; Agro
                  </span>
                </div>

                {/* Status pill inside image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-left">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#88B84A] font-bold">Qualidade Garantida</p>
                    <p className="text-sm font-bold">Nutrição &amp; Farmácia Veterinária</p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#5D8C3A] flex items-center justify-center text-white shrink-0">
                    <Heart className="w-4 h-4 fill-white" />
                  </span>
                </div>
              </div>

              {/* Geometric Card Bottom Spec Bar */}
              <div className="p-5 bg-white text-left space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-12 bg-[#C8A43A] rounded-full"></div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5D8C3A]">Loja Física &amp; Delivery</span>
                </div>
                
                <p className="text-xs text-[#20241F]/80 font-medium leading-relaxed">
                  Visite nossa loja ou faça seu pedido rápido pelo WhatsApp.
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[11px] font-semibold text-[#33452E]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#5D8C3A]" />
                    {STORE_INFO.address.city}
                  </span>
                  <span className="text-[#C8A43A] font-bold">Atendimento Próximo</span>
                </div>
              </div>

            </div>

            {/* Geometric Floating Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-gray-200 hidden sm:flex items-center gap-2 text-left z-20">
              <Sparkles className="w-4 h-4 text-[#C8A43A]" />
              <div>
                <p className="text-[11px] font-bold text-[#33452E] leading-none">Melhor Custo-Benefício</p>
                <p className="text-[9px] text-gray-500">Rações a Granel e Sacaria</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

