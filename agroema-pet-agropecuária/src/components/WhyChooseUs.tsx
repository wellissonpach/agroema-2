import React from 'react';
import { 
  PackageCheck, 
  HeartHandshake, 
  Zap, 
  ShieldCheck, 
  Award,
  Users,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  MapPin
} from 'lucide-react';
import { BENEFITS_DATA, STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <PackageCheck className="w-7 h-7 text-[#5D8C3A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#5D8C3A]" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-[#5D8C3A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#5D8C3A]" />;
      default:
        return <Award className="w-7 h-7 text-[#5D8C3A]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-[#F5F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5D8C3A]/10 text-[#33452E] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#5D8C3A]" />
            <span>Diferenciais AgroEma</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20241F] tracking-tight">
            Equilíbrio entre variedade, orientação de confiança e conveniência
          </h2>
          
          <p className="text-base text-[#20241F]/70">
            Mais do que uma agropecuária, somos o ponto de apoio para quem cuida dos seus animais com amor e dedicação no dia a dia.
          </p>
        </div>

        {/* Geometric Balance 4-Column Strip with Gap-px Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#33452E]/15 rounded-2xl overflow-hidden border border-[#33452E]/15 shadow-sm">
          
          {/* Item 1: Linha Pet */}
          <div className="bg-white p-7 sm:p-8 flex flex-col justify-between group hover:bg-[#F5F6F2] transition-colors text-left">
            <div>
              <div className="text-[#5D8C3A] mb-4">
                <PackageCheck className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A43A] font-bold block mb-1">
                Pilar 01
              </span>
              <h3 className="font-heading font-bold text-lg text-[#33452E] mb-2">
                Variedade Completa Pet &amp; Agro
              </h3>
              <p className="text-xs sm:text-sm text-[#20241F]/70 leading-relaxed">
                Rações super premium, nutrição para criações, sementes, insumos rurais e acessórios essenciais.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#5D8C3A]">
              <span>Tudo em um só lugar</span>
            </div>
          </div>

          {/* Item 2: Atendimento */}
          <div className="bg-white p-7 sm:p-8 flex flex-col justify-between group hover:bg-[#F5F6F2] transition-colors text-left">
            <div>
              <div className="text-[#5D8C3A] mb-4">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A43A] font-bold block mb-1">
                Pilar 02
              </span>
              <h3 className="font-heading font-bold text-lg text-[#33452E] mb-2">
                Atendimento Especializado
              </h3>
              <p className="text-xs sm:text-sm text-[#20241F]/70 leading-relaxed">
                Orientação sincera no balcão e no WhatsApp para você levar exatamente o que seu animal precisa.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#5D8C3A]">
              <span>Orientação humana</span>
            </div>
          </div>

          {/* Item 3: Localização & Rapidez */}
          <div className="bg-white p-7 sm:p-8 flex flex-col justify-between group hover:bg-[#F5F6F2] transition-colors text-left">
            <div>
              <div className="text-[#5D8C3A] mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A43A] font-bold block mb-1">
                Pilar 03
              </span>
              <h3 className="font-heading font-bold text-lg text-[#33452E] mb-2">
                Fácil Parada &amp; Retirada
              </h3>
              <p className="text-xs sm:text-sm text-[#20241F]/70 leading-relaxed">
                Estacionamento próprio na porta, carregamento de sacarias no veículo e entregas rápidas na região.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#5D8C3A]">
              <span>Agilidade no dia a dia</span>
            </div>
          </div>

          {/* Item 4: Accent Solid Card (Geometric Accent in #88B84A with #33452E button) */}
          <div className="bg-[#88B84A] p-7 sm:p-8 flex flex-col justify-between text-white text-left">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#33452E] text-[#C8A43A] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#33452E] font-bold block mb-1">
                Atendimento Instantâneo
              </span>
              <h3 className="font-heading font-extrabold text-xl mb-2 text-[#20241F]">
                Precisa de ajuda agora?
              </h3>
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                Nossos especialistas estão prontos para tirar dúvidas e cotar produtos via WhatsApp.
              </p>
            </div>

            <div className="mt-6">
              <a
                id="why-card-whatsapp-btn"
                href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#33452E] hover:bg-[#20241F] text-white text-xs font-bold py-3 px-5 rounded-xl uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#88B84A]" />
                <span>Chamar agora</span>
              </a>
            </div>
          </div>

        </div>

        {/* Community Proof Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-[#33452E] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#C8A43A] text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Presença Regional Consolidada</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">Mais de 5.000 clientes confiam no cuidado da AgroEma</h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Produtos originais com garantia de procedência das maiores marcas de nutrição animal e medicamentos veterinários.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center px-4 py-2 bg-white/10 rounded-xl border border-white/10">
              <span className="block text-2xl font-extrabold text-[#C8A43A]">100%</span>
              <span className="text-[10px] uppercase font-bold text-white/80 tracking-wider">Originais</span>
            </div>
            <div className="text-center px-4 py-2 bg-white/10 rounded-xl border border-white/10">
              <span className="block text-2xl font-extrabold text-[#88B84A]">07h30</span>
              <span className="text-[10px] uppercase font-bold text-white/80 tracking-wider">Abertura</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

