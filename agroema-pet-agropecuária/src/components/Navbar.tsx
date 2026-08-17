import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { STORE_INFO, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onNavigateToCategory?: (catId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check store opening hours dynamically
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentDecimalHour = hours + minutes / 60;

    if (day >= 1 && day <= 5) {
      // Mon-Fri: 7:30 to 18:00
      setIsOpenNow(currentDecimalHour >= 7.5 && currentDecimalHour < 18.0);
    } else if (day === 6) {
      // Sat: 7:30 to 13:00
      setIsOpenNow(currentDecimalHour >= 7.5 && currentDecimalHour < 13.0);
    } else {
      // Sunday closed
      setIsOpenNow(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <>
      {/* Top micro bar with contact and opening status */}
      <div id="top-announcement-bar" className="bg-[#33452E] text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-[#C8A43A]" />
              <span>QNP 13 Conjunto E, Lote 49, Loja 01 • Ceilândia Norte</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#88B84A]" />
              <span>Seg à Sex: 07h30 às 18h | Sáb: 07h30 às 13h</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/20 text-white/90 text-[11px] font-medium border border-white/10">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-[#88B84A] animate-pulse' : 'bg-amber-400'}`}></span>
              <span>{isOpenNow ? 'Loja Aberta Agora' : 'Atendimento no WhatsApp'}</span>
            </div>
            
            <a 
              href={`tel:${STORE_INFO.whatsappClean}`} 
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#88B84A]" />
              <span>{STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#33452E]/10 py-3' 
            : 'bg-white border-b border-[#33452E]/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="focus:outline-none focus:ring-2 focus:ring-[#5D8C3A] rounded-lg">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#33452E]/70 hover:text-[#33452E] font-bold transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5D8C3A] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Button - Pill Button as in Geometric Balance Design */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-cta"
              href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5D8C3A] hover:bg-[#33452E] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-white/20 text-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="p-2.5 rounded-full bg-[#5D8C3A] text-white hover:bg-[#33452E] transition-colors sm:hidden"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#33452E] hover:bg-[#F5F6F2] transition-colors focus:outline-none"
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#33452E]" />
              ) : (
                <Menu className="w-6 h-6 text-[#33452E]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white"
        >
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <Logo size="sm" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#5D8C3A] px-3 mb-2">Navegação</p>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-[#20241F] font-semibold hover:bg-[#F5F6F2] transition-colors text-base"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#5D8C3A] px-3">Atendimento Rápido</p>
              
              <div className="bg-[#F5F6F2] p-4 rounded-2xl space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-[#20241F]/80">
                  <MapPin className="w-4 h-4 text-[#5D8C3A] shrink-0 mt-0.5" />
                  <span>Av. Principal dos Produtores, 1250 - Centro</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#20241F]/80">
                  <Clock className="w-4 h-4 text-[#5D8C3A] shrink-0" />
                  <span>Seg a Sex: 07h30 - 18h | Sáb: 07h30 - 13h</span>
                </div>
              </div>

              <a
                id="mobile-drawer-whatsapp-btn"
                href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#5D8C3A] text-white font-bold py-3.5 px-4 rounded-xl shadow text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-white border-2 border-[#33452E]/20 text-[#33452E] font-bold py-3 px-4 rounded-xl text-sm hover:bg-gray-50"
              >
                <MapPin className="w-4 h-4 text-[#33452E]" />
                <span>Ver Como Chegar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
