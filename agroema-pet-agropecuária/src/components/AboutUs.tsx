import React from 'react';
import { 
  Heart, 
  MapPin, 
  Users2, 
  Award, 
  CheckCircle2, 
  Store,
  Sparkles
} from 'lucide-react';
import { STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F5F6F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image with Geometric Frame */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80"
                  alt="Equipe e atendimento AgroEma"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 hidden sm:block rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"
                  alt="Criação e vida no campo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-[#33452E] text-white p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5D8C3A] flex items-center justify-center text-white">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-extrabold text-white">Amor pelos Animais</p>
                  <p className="text-[11px] text-[#C8A43A] font-bold">Vocação e Dedicação Diária</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5D8C3A]/15 text-[#33452E] text-xs font-bold uppercase tracking-wider">
              <Store className="w-3.5 h-3.5 text-[#5D8C3A]" />
              <span>Nossa História &amp; Propósito</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20241F] tracking-tight leading-tight">
              Uma empresa próxima, que entende a rotina de quem cuida dos seus <span className="text-[#C8A43A] italic font-serif">animais</span>.
            </h2>

            <div className="space-y-4 text-[#20241F]/80 text-base leading-relaxed">
              <p>
                A <strong>AgroEma</strong> nasceu com uma missão clara e acolhedora: ser a casa de apoio para quem tem paixão pelos seus animais de estimação e para quem vive e trabalha com a criação no campo.
              </p>
              
              <p>
                Acreditamos que um bom atendimento vai além de entregar uma sacaria de ração ou uma caixinha de remédio. Está na conversa no balcão, no conselho atencioso para escolher o produto certo e na segurança de levar para casa apenas marcas originais e testadas.
              </p>

              <p>
                Seja para o seu melhor amigo de quatro patas ou para a sustentabilidade da sua chácara, sítio ou fazenda, aqui você é recebido com simpatia, respeito e conhecimento do segmento.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#33452E]/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#5D8C3A] shrink-0" />
                <span className="text-xs font-bold text-[#33452E]">Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#33452E]/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#5D8C3A] shrink-0" />
                <span className="text-xs font-bold text-[#33452E]">Preço justo e honesto</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#33452E]/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#5D8C3A] shrink-0" />
                <span className="text-xs font-bold text-[#33452E]">Estoque sempre renovado</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#33452E]/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#5D8C3A] shrink-0" />
                <span className="text-xs font-bold text-[#33452E]">Facilidade de contato</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="about-visit-store-btn"
                href="#localizacao"
                className="inline-flex items-center gap-2 bg-[#33452E] hover:bg-[#20241F] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C8A43A]" />
                <span>Venha nos Conhecer Pessoalmente</span>
              </a>

              <a
                id="about-whatsapp-btn"
                href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5D8C3A] hover:bg-[#33452E] text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

