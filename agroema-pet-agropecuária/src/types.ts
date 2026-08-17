export interface Product {
  id: string;
  name: string;
  category: 'pet' | 'agro' | 'medicamentos' | 'acessorios' | 'aves';
  subCategory: string;
  tag: string;
  description: string;
  features: string[];
  inStock: boolean;
  image: string;
  badge?: string;
  brand?: string;
  packSizes?: string[];
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  type: 'pet' | 'agro';
  description: string;
  image: string;
  itemsCount: string;
  items: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  whatsappClean: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    fullFormatted: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  googleMapsUrl: string;
  wazeUrl: string;
  instagram: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'compra' | 'entrega' | 'produtos' | 'geral';
}
