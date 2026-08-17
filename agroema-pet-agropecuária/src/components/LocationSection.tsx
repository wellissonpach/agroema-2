import React, { useState, useEffect } from 'react';
import { STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Car, 
  CheckCircle, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentDecimalHour = hours + minutes / 60;

    if (day >= 1 && day <= 5) {
      setIsOpenNow(currentDecimalHour >= 7.5 && currentDecimalHour < 18.0);
    } else if (day === 6) {
      setIsOpenNow(currentDecimalHour >= 7.5 && currentDecimalHour < 13.0);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  return (
    <section id="localizacao" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5D8C3A]/10 text-[#33452E] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#5D8C3A]" />
            <span>Onde Estamos</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20241F] tracking-tight">
            Venha nos visitar ou faça seu pedido com retirada rápida
          </h2>

          <p className="text-base text-[#20241F]/70">
            Nossa loja conta com fácil acesso para veículos de passeio e caminhonetes, vaga na porta e equipe pronta para carregar suas compras.
          </p>
        </div>

        {/* Main Grid: Info card on Left, Interactive Map frame on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info Card */}
          <div className="lg:col-span-5 bg-[#F5F6F2] rounded-2xl p-6 sm:p-8 border border-[#33452E]/10 shadow-sm flex flex-col justify-between text-left space-y-6">
            
            {/* Status Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#33452E]/10">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${isOpenNow ? 'bg-[#5D8C3A] animate-pulse' : 'bg-amber-500'}`} />
                <span className="text-sm font-extrabold text-[#33452E]">
                  {isOpenNow ? 'Loja Aberta Agora' : 'Fechada no momento'}
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5D8C3A]">
                Atendimento presencial
              </span>
            </div>

            {/* Address Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#5D8C3A]/15 text-[#5D8C3A] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#5D8C3A] uppercase tracking-widest">Endereço da Loja</h4>
                  <p className="text-base font-bold text-[#20241F] mt-0.5">
                    {STORE_INFO.address.street}
                  </p>
                  <p className="text-sm text-gray-600">
                    {STORE_INFO.address.neighborhood} — {STORE_INFO.address.city}
                  </p>
                  <p className="text-xs font-semibold text-[#5D8C3A] mt-1 flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" />
                    <span>Estacionamento exclusivo na frente da loja</span>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#33452E]/10 text-[#33452E] flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold text-[#5D8C3A] uppercase tracking-widest">Horários de Atendimento</h4>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">
                    <strong>Segunda a Sexta:</strong> 07:30 às 18:00
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">
                    <strong>Sábado:</strong> 07:30 às 13:00
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Domingo &amp; Feriados:</strong> Fechado (Atendimento WhatsApp em dias úteis)
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#C8A43A]/20 text-[#C8A43A] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#33452E]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#5D8C3A] uppercase tracking-widest">Telefone &amp; WhatsApp</h4>
                  <p className="text-base font-bold text-[#20241F] mt-0.5">
                    {STORE_INFO.phone}
                  </p>
                  <p className="text-xs text-gray-600">
                    Atendimento rápido para cotações e pedidos
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Navigation Buttons */}
            <div className="pt-4 border-t border-[#33452E]/10 space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id="btn-google-maps"
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#33452E] hover:bg-[#20241F] text-white font-bold text-xs py-3 px-3 rounded-xl transition-colors shadow-sm text-center"
                >
                  <Navigation className="w-4 h-4 text-[#88B84A]" />
                  <span>Google Maps</span>
                </a>

                <a
                  id="btn-waze"
                  href={STORE_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#5D8C3A] hover:bg-[#33452E] text-white font-bold text-xs py-3 px-3 rounded-xl transition-colors shadow-sm text-center"
                >
                  <Car className="w-4 h-4" />
                  <span>Abrir no Waze</span>
                </a>
              </div>

              <a
                id="btn-location-whatsapp"
                href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.location)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#C8A43A] hover:bg-[#b5922e] text-[#20241F] font-extrabold text-xs py-3.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-[#20241F]/20" />
                <span>Pedir Localização no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 bg-gray-100 rounded-2xl overflow-hidden border border-[#33452E]/10 shadow-sm relative min-h-[380px] flex flex-col">
            
            {/* Custom Styled Map Container */}
            <div className="relative flex-1 w-full h-full min-h-[360px] bg-slate-200">
              <iframe
                title="Localização da AgroEma Agropecuária"
                src="https://maps.google.com/maps?q=-15.8072237,-48.129273&hl=pt-BR&z=17&output=embed"
                className="w-full h-full border-0 absolute inset-0 filter saturate-125"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Pin Overlay */}
              <div className="absolute top-4 left-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 max-w-xs text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5D8C3A]" />
                  <p className="text-[10px] font-extrabold text-[#33452E] uppercase tracking-wider">Agroema Agropecuária</p>
                </div>
                <p className="text-xs font-bold text-gray-800 leading-snug">
                  {STORE_INFO.address.street}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {STORE_INFO.address.neighborhood} — {STORE_INFO.address.city}/{STORE_INFO.address.state}
                </p>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-[#5D8C3A] hover:underline"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom helper strip */}
            <div className="p-3.5 bg-[#33452E] text-white text-xs flex flex-wrap items-center justify-between gap-2 px-6 text-left">
              <span className="text-white/80">🚗 Ponto de referência: QNP 13 em Ceilândia Norte. Fácil acesso e parada na porta.</span>
              <span className="font-bold text-[#C8A43A]">Carregamento de sacarias no veículo</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
