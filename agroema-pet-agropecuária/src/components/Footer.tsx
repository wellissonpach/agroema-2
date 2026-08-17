import React from 'react';
import { Logo } from './Logo';
import { STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  ArrowUp,
  Heart,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#23301F] text-white pt-16 pb-12 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="dark" size="lg" />
            
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Sua referência em nutrição animal, farmácia veterinária e produtos agropecuários. Cuidando dos seus animais com atenção, variedade e atendimento familiar de quem entende do campo e da cidade.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={STORE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram AgroEma"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#5D8C3A] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp AgroEma"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#5D8C3A] text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={`tel:${STORE_INFO.whatsappClean}`}
                aria-label="Telefone AgroEma"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#5D8C3A] text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#88B84A]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-[#88B84A] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-white/80 hover:text-[#88B84A] transition-colors">
                  Linhas &amp; Categorias
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-white/80 hover:text-[#88B84A] transition-colors">
                  Por que a AgroEma
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-white/80 hover:text-[#88B84A] transition-colors">
                  Produtos em Destaque
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-[#88B84A] transition-colors">
                  Sobre a Loja
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-white/80 hover:text-[#88B84A] transition-colors">
                  Onde Estamos
                </a>
              </li>
              <li>
                <a href="#duvidas" className="text-white/80 hover:text-[#88B84A] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Linhas Principais (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#88B84A]">
              Principais Soluções
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A43A]" />
                <span>Rações Super Premium &amp; Especiais</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A43A]" />
                <span>Antipulgas, Carrapatos e Vermífugos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A43A]" />
                <span>Nutrição para Aves, Galinhas &amp; Pássaros</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A43A]" />
                <span>Suplementos Minerais para Rebanhos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A43A]" />
                <span>Acessórios, Comedouros &amp; Higiene</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A43A]" />
                <span>Vendas a Granel e Sacaria Fechada</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Atendimento (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#88B84A]">
              Fale Conosco
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A43A] shrink-0 mt-0.5" />
                <span>{STORE_INFO.address.fullFormatted}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#88B84A] shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#88B84A] shrink-0 mt-0.5" />
                <div>
                  <p>{STORE_INFO.hours.weekdays}</p>
                  <p>{STORE_INFO.hours.saturday}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#5D8C3A] hover:bg-[#88B84A] text-white font-bold text-xs py-3 px-4 rounded-full transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Payment & Security Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#88B84A]" />
            <span>Formas de pagamento: Pix, Cartões de Débito e Crédito, Dinheiro</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C8A43A]" />
            <span>Produtos Originais com Garantia de Procedência</span>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} <strong>AgroEma — Pet &amp; Agropecuária</strong>. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
