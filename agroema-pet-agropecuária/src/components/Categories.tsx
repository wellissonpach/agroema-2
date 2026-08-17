import React, { useState } from 'react';
import { CATEGORIES_DATA, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { Category } from '../types';
import { 
  PawPrint, 
  Tractor, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

interface CategoriesProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pet' | 'agro'>('all');

  const filteredCategories = CATEGORIES_DATA.filter((cat) => {
    if (activeTab === 'all') return true;
    return cat.type === activeTab;
  });

  return (
    <section id="categorias" className="py-16 md:py-24 bg-[#F5F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5D8C3A]/15 text-[#33452E] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#5D8C3A]" />
              <span>Variedade Especializada</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20241F] tracking-tight">
              O que você procura hoje na <span className="text-[#33452E]">AgroEma</span>?
            </h2>
            <p className="text-base text-[#20241F]/70">
              Separamos nossas soluções em duas grandes linhas para facilitar sua busca, seja para o seu pet em casa ou para suas criações no campo.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-200 shrink-0 self-start md:self-auto">
            <button
              id="filter-all-cats-btn"
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#33452E] text-white shadow-sm'
                  : 'text-[#20241F]/70 hover:text-[#20241F] hover:bg-gray-50'
              }`}
            >
              Todas as Linhas
            </button>
            <button
              id="filter-pet-cats-btn"
              type="button"
              onClick={() => setActiveTab('pet')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'pet'
                  ? 'bg-[#5D8C3A] text-white shadow-sm'
                  : 'text-[#20241F]/70 hover:text-[#5D8C3A] hover:bg-gray-50'
              }`}
            >
              <PawPrint className="w-4 h-4" />
              <span>Linha Pet</span>
            </button>
            <button
              id="filter-agro-cats-btn"
              type="button"
              onClick={() => setActiveTab('agro')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'agro'
                  ? 'bg-[#33452E] text-white shadow-sm'
                  : 'text-[#20241F]/70 hover:text-[#33452E] hover:bg-gray-50'
              }`}
            >
              <Tractor className="w-4 h-4" />
              <span>Linha Agro</span>
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={`cat-card-${category.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#33452E]/10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container with tag */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-3.5 left-3.5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-extrabold shadow-sm ${
                    category.type === 'pet' 
                      ? 'bg-[#5D8C3A] text-white' 
                      : 'bg-[#33452E] text-[#C8A43A]'
                  }`}>
                    {category.type === 'pet' ? <PawPrint className="w-3.5 h-3.5" /> : <Tractor className="w-3.5 h-3.5" />}
                    <span>{category.type === 'pet' ? 'Linha Pet' : 'Linha Agro'}</span>
                  </span>
                </div>

                {/* Count Badge Top Right */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    {category.itemsCount}
                  </span>
                </div>

                {/* Category Title in Image Base */}
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <h3 className="text-lg font-heading font-extrabold text-white leading-snug drop-shadow-sm">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                <p className="text-sm text-[#20241F]/80 leading-relaxed">
                  {category.description}
                </p>

                {/* Feature Bullets */}
                <ul className="space-y-2 py-1">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-[#20241F]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5D8C3A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className="pt-3 border-t border-[#33452E]/10 flex items-center gap-2">
                  <a
                    id={`cat-whatsapp-cta-${category.id}`}
                    href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.category(category.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F5F6F2] hover:bg-[#33452E] text-[#33452E] hover:text-white font-bold text-xs py-3 px-3.5 rounded-xl border border-[#33452E]/15 transition-colors duration-150 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-[#5D8C3A] group-hover/btn:text-[#C8A43A]" />
                    <span>Consultar no WhatsApp</span>
                  </a>

                  <a
                    href="#produtos"
                    onClick={() => onSelectCategory && onSelectCategory(category.name)}
                    className="p-3 rounded-xl bg-gray-50 hover:bg-[#5D8C3A] text-gray-700 hover:text-white transition-colors"
                    title="Ver produtos relacionados"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Notice */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#33452E]/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C8A43A]/15 text-[#C8A43A] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#33452E]">Procurando algum item específico ou marca sob encomenda?</h4>
              <p className="text-xs sm:text-sm text-[#20241F]/70">Nossa equipe verifica no estoque e providencia para você com agilidade.</p>
            </div>
          </div>
          <a
            id="cat-custom-request-btn"
            href={createWhatsAppLink("Olá! Gostaria de consultar se vocês têm um produto específico em estoque.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#33452E] hover:bg-[#20241F] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#88B84A]" />
            <span>Perguntar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
