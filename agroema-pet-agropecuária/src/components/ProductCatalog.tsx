import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { Product } from '../types';
import { ProductModal } from './ProductModal';
import { 
  Search, 
  MessageCircle, 
  Eye, 
  CheckCircle2, 
  Tag, 
  Package, 
  Filter,
  Sparkles,
  ShoppingBag,
  Info
} from 'lucide-react';

interface ProductCatalogProps {
  initialCategoryFilter?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ initialCategoryFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categoriesFilter = [
    { id: 'todos', label: 'Todos os Produtos' },
    { id: 'pet', label: 'Cães & Gatos (Pet)' },
    { id: 'medicamentos', label: 'Farmácia Veterinária' },
    { id: 'aves', label: 'Aves & Criação' },
    { id: 'agro', label: 'Suplementos & Agro' },
    { id: 'acessorios', label: 'Higiene & Acessórios' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = 
        selectedCategory === 'todos' || product.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="produtos" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5D8C3A]/10 text-[#33452E] text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5 text-[#5D8C3A]" />
            <span>Catálogo em Destaque</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#20241F] tracking-tight">
            Produtos selecionados para pronta entrega na <span className="text-[#33452E]">AgroEma</span>
          </h2>

          <p className="text-base text-[#20241F]/70">
            Confira alguns dos itens mais procurados em nossa loja física. Atendemos pedidos pelo WhatsApp com rapidez e reservamos para você.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-[#F5F6F2] p-4 sm:p-6 rounded-2xl border border-[#33452E]/10 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="catalog-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por ração, antipulgas, suplemento, aves ou acessório..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-[#33452E]/15 text-sm text-[#20241F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D8C3A] focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md font-bold"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-bold text-[#33452E] px-2 shrink-0">
              Mostrando <span className="text-[#5D8C3A] text-sm font-extrabold">{filteredProducts.length}</span> itens disponíveis
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {categoriesFilter.map((cat) => (
              <button
                key={cat.id}
                id={`filter-pill-${cat.id}`}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#33452E] text-white shadow-sm'
                    : 'bg-white text-[#20241F]/80 hover:bg-gray-100 border border-[#33452E]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#F5F6F2] rounded-3xl border border-dashed border-[#33452E]/20 p-8">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#33452E] mb-1">Nenhum produto encontrado com essa busca</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-5">
              Não encontrou o que procura? Fale diretamente com nossa equipe no WhatsApp. Temos centenas de outros itens na loja física.
            </p>
            <a
              href={createWhatsAppLink(`Olá! Procuro por: ${searchQuery}, vocês têm disponível?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5D8C3A] hover:bg-[#33452E] text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar Produto no WhatsApp</span>
            </a>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-white rounded-2xl border border-[#33452E]/10 hover:border-[#5D8C3A]/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group text-left hover:-translate-y-1"
            >
              {/* Product Image Box */}
              <div 
                className="relative h-56 bg-gray-50 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge top left */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-[#33452E] text-[#C8A43A] text-[11px] font-bold shadow-sm">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* In Stock Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#5D8C3A] text-white text-[10px] font-extrabold shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Em Estoque</span>
                  </span>
                </div>

                {/* Quick View overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#33452E] font-bold text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-[#5D8C3A]" />
                    <span>Ver Detalhes</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-[#5D8C3A] uppercase tracking-wider text-[10px]">
                      {product.subCategory}
                    </span>
                    {product.brand && (
                      <span className="text-gray-400 font-medium text-[11px]">
                        {product.brand}
                      </span>
                    )}
                  </div>

                  <h3 
                    onClick={() => setSelectedProduct(product)}
                    className="font-heading text-base sm:text-lg font-bold text-[#20241F] group-hover:text-[#33452E] transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#20241F]/70 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Pack sizes pills */}
                {product.packSizes && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.packSizes.map((size, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-[#F5F6F2] text-gray-700 px-2 py-0.5 rounded-md border border-[#33452E]/10">
                        {size}
                      </span>
                    ))}
                  </div>
                )}

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-[#33452E]/10 flex items-center gap-2">
                  <a
                    id={`product-whatsapp-btn-${product.id}`}
                    href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.product(product.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#5D8C3A] hover:bg-[#33452E] text-white font-bold text-xs py-3 px-3 rounded-xl shadow-sm transition-all duration-150 transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Consultar no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="p-3 rounded-xl bg-[#F5F6F2] hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Detalhes do produto"
                    aria-label="Ver detalhes"
                  >
                    <Info className="w-4 h-4 text-[#33452E]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#33452E] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A43A] opacity-10 rounded-bl-full pointer-events-none" />
          <div className="space-y-1 relative z-10">
            <h4 className="font-heading text-lg sm:text-xl font-bold">
              Não encontrou a marca ou produto exato que costuma usar?
            </h4>
            <p className="text-xs sm:text-sm text-white/80">
              Temos um catálogo físico completo com mais de 2.000 itens para seu pet e criação rural.
            </p>
          </div>

          <a
            id="catalog-all-products-whatsapp-btn"
            href={createWhatsAppLink("Olá! Gostaria de consultar se vocês têm um produto que não encontrei no site.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#C8A43A] hover:bg-[#b5922e] text-[#20241F] font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-colors relative z-10"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar Catálogo Completo</span>
          </a>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
