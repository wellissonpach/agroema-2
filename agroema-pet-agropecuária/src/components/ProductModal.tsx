import React from 'react';
import { Product } from '../types';
import { WHATSAPP_MESSAGE_TEMPLATES, createWhatsAppLink } from '../data/mockData';
import { 
  X, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Package, 
  Sparkles,
  Share2
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Confira este produto na AgroEma: ${product.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.href}#produto-${product.id}`);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div 
      id="product-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 relative animate-scale-up max-h-[90vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-[#F5F6F2]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-[#5D8C3A] text-white text-xs font-bold uppercase tracking-wider">
              {product.tag}
            </span>
            {product.brand && (
              <span className="text-xs font-semibold text-gray-500">
                {product.brand}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-gray-500 hover:bg-white transition-colors"
              title="Compartilhar produto"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:bg-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            
            {/* Product Image */}
            <div className="sm:col-span-5 relative rounded-2xl overflow-hidden bg-gray-50 aspect-square border border-gray-200/70">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className="px-2 py-0.5 rounded-md bg-[#33452E] text-white text-[10px] font-bold">
                  {product.inStock ? 'Disponível na Loja' : 'Consulte Disponibilidade'}
                </span>
              </div>
            </div>

            {/* Product Meta */}
            <div className="sm:col-span-7 space-y-3">
              <p className="text-xs font-bold text-[#5D8C3A] uppercase tracking-wider">
                {product.subCategory}
              </p>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#20241F] leading-tight">
                {product.name}
              </h3>
              <p className="text-sm text-[#20241F]/80 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Available Pack Sizes */}
          {product.packSizes && product.packSizes.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#33452E] uppercase">
                <Package className="w-3.5 h-3.5 text-[#5D8C3A]" />
                <span>Opções &amp; Embalagens Disponíveis:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.packSizes.map((size, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-[#F5F6F2] border border-gray-200 text-xs font-bold text-[#20241F]"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Feature Highlights */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <p className="text-xs font-bold text-[#33452E] uppercase tracking-wider">
              Destaques do Produto:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-[#F5F6F2]/70 p-2.5 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-[#5D8C3A] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantee box */}
          <div className="p-4 rounded-2xl bg-[#5D8C3A]/10 border border-[#5D8C3A]/20 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#5D8C3A] shrink-0" />
            <p className="text-xs text-[#33452E] leading-snug">
              <strong>Procedência AgroEma:</strong> Produto 100% original, lacrado e com lote recente. Suporte da nossa equipe para dúvidas de administração e uso.
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-[#F5F6F2] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-xs text-gray-500 block">Atendimento imediato</span>
            <span className="text-xs font-bold text-[#33452E]">Tire dúvidas ou reserve agora</span>
          </div>

          <a
            id="modal-whatsapp-cta-btn"
            href={createWhatsAppLink(WHATSAPP_MESSAGE_TEMPLATES.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#5D8C3A] hover:bg-[#4d7530] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-colors"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Consultar Valor no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
