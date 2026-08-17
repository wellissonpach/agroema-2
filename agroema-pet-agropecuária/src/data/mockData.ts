import { Product, Category, Benefit, StoreInfo, FAQItem } from '../types';

export const STORE_INFO: StoreInfo = {
  name: 'AgroEma',
  tagline: 'Pet & Agropecuária',
  phone: '(61) 99269-1438',
  whatsapp: '(61) 99269-1438',
  whatsappClean: '5561992691438',
  address: {
    street: 'QNP 13 Conjunto E, Lote 49, Loja 01',
    neighborhood: 'Ceilândia Norte (Ceilândia)',
    city: 'Brasília',
    state: 'DF',
    cep: '72241-305',
    fullFormatted: 'QNP 13 Conjunto E, Lote 49, Loja 01 - Ceilândia Norte, Brasília - DF, 72241-305 (Fácil parada e retirada)'
  },
  hours: {
    weekdays: 'Segunda a Sexta: 07:30 às 18:00',
    saturday: 'Sábado: 07:30 às 13:00',
    sunday: 'Domingo: Fechado (Atendimento WhatsApp)'
  },
  googleMapsUrl: 'https://www.google.com/maps/place/Agroema+Agropecu%C3%A1ria/@-15.8072237,-48.129273,20z/data=!4m6!3m5!1s0x935bd3b8cdbd4e73:0xe90ecdc330da7253!8m2!3d-15.8072237!4d-48.129273!16s%2Fg%2F11sfpjtp8z',
  wazeUrl: 'https://waze.com/ul?ll=-15.8072237,-48.129273&navigate=yes',
  instagram: 'https://www.instagram.com/agroemaoficial/'
};

export const CATEGORIES_DATA: Category[] = [
  {
    id: 'linha-pet-racoes',
    name: 'Rações Super Premium & Standard',
    type: 'pet',
    description: 'Nutrição balanceada para cães e gatos de todas as raças, idades e portes com as melhores marcas do mercado.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
    itemsCount: '+80 opções',
    items: ['Filhotes, Adultos e Sênior', 'Castrados e Raças Específicas', 'Rações Medicamentosas', 'Opções a Granel e Sacaria Fechada']
  },
  {
    id: 'linha-pet-farmacia',
    name: 'Farmácia & Cuidados Veterinários',
    type: 'pet',
    description: 'Antipulgas, carrapaticidas, vermífugos, suplementos vitamínicos e medicamentos para saúde preventiva do seu pet.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    itemsCount: '+120 itens',
    items: ['Comprimidos Mastigáveis Antipulgas', 'Coleiras Protetoras', 'Vermífugos e Suplementos', 'Pomadas e Curativos']
  },
  {
    id: 'linha-pet-higiene',
    name: 'Higiene, Conforto & Acessórios',
    type: 'pet',
    description: 'Shampoos, tapetes higiênicos, caminhas, guias, coleiras reforçadas e brinquedos interativos para o dia a dia.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    itemsCount: '+150 itens',
    items: ['Tapetes Higiênicos e Areias', 'Shampoos e Condicionadores Neutros', 'Caminhas e Casinhas Térmicas', 'Guias, Peitorais e Brinquedos']
  },
  {
    id: 'linha-agro-nutricao',
    name: 'Nutrição de Criação & Aves',
    type: 'agro',
    description: 'Milho selecionado, quirera, rações para postura, crescimento, engorda, equinos, suínos e aves ornamentais.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    itemsCount: '+60 variedades',
    items: ['Ração de Postura & Inicial', 'Milho em Grão e Triturado', 'Misturas Especiais para Pássaros', 'Fardos e Sacas de 20kg a 50kg']
  },
  {
    id: 'linha-agro-suplementos',
    name: 'Sal Mineral, Suplementos & Pastagem',
    type: 'agro',
    description: 'Suplementos minerais, núcleos, sementes forrageiras e adubos para máximo rendimento do seu rebanho e lavoura.',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
    itemsCount: '+45 itens',
    items: ['Sal Mineralizado para Bovinos', 'Eletrólitos e Minerais para Equinos', 'Sementes de Capim e Pasto', 'Fertilizantes e Corretivos']
  },
  {
    id: 'linha-agro-utilidades',
    name: 'Ferramentas, Cercamento & Uso Rural',
    type: 'agro',
    description: 'Arames, telas, botinas, pulverizadores, bebedouros, comedouros automáticos e utilidades para o campo.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80',
    itemsCount: '+90 itens',
    items: ['Bebedouros e Comedouros', 'Arame Farpado e Ovalado', 'Pulverizadores Manuais e Costais', 'Botinas e EPIs Rurais']
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'racao-premium-caes-adultos',
    name: 'Ração Especial Cães Adultos Premium Especial',
    category: 'pet',
    subCategory: 'Rações para Cães',
    tag: 'Mais Vendido Pet',
    description: 'Alimento completo e balanceado formulado com proteínas nobres, ômegas 3 e 6 para pelagem brilhante e alta digestibilidade.',
    features: ['Zero corantes artificiais', 'Extrato de yucca para fezes firmes', 'Pelagem brilhante e saudável'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
    badge: 'Destaque da Semana',
    brand: 'Linha Selecionada',
    packSizes: ['15kg', '20kg', 'Granel'],
    popular: true
  },
  {
    id: 'bravecto-antipulgas',
    name: 'Comprimido Mastigável Antipulgas e Carrapatos (12 Semanas)',
    category: 'medicamentos',
    subCategory: 'Farmácia Veterinária',
    tag: 'Proteção Máxima',
    description: 'Proteção contínua e rápida por até 12 semanas completas contra pulgas, carrapatos e sarnas em uma única dose mastigável palatável.',
    features: ['Efeito rápido em até 8 horas', 'Ação duradoura por 3 meses', 'Comprimido palatável e mastigável'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    badge: 'Original & Lacrado',
    brand: 'Proteção Veterinária',
    packSizes: ['2 a 4.5kg', '4.5 a 10kg', '10 a 20kg', '20 a 40kg'],
    popular: true
  },
  {
    id: 'racao-gatos-castrados',
    name: 'Ração para Gatos Castrados Frango & Salmão',
    category: 'pet',
    subCategory: 'Rações para Gatos',
    tag: 'Controle de Peso',
    description: 'Equilíbrio mineral ideal para o trato urinário do gato castrado, com calorias reduzidas e sabor irresistível.',
    features: ['Controle do pH urinário', 'Auxilia na prevenção de bolas de pelos', 'Controle calórico eficiente'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    badge: 'Saúde Urinária',
    brand: 'Super Premium Cat',
    packSizes: ['1kg', '3kg', '10.1kg', 'Granel'],
    popular: true
  },
  {
    id: 'racao-postura-galinhas',
    name: 'Ração de Postura Concentrada para Aves & Poedeiras',
    category: 'aves',
    subCategory: 'Criação & Aves',
    tag: 'Alta Produção',
    description: 'Enriquecida com cálcio e fósforo na proporção ideal para fortalecimento da casca dos ovos e maior índice de postura.',
    features: ['Níveis balanceados de cálcio', 'Melhora na coloração da gema', 'Excelente conversão alimentar'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    badge: 'Em Sacaria de 20kg / 40kg',
    brand: 'Nutrição Campo Forte',
    packSizes: ['5kg', '20kg', '40kg', 'Granel'],
    popular: true
  },
  {
    id: 'sal-mineral-gado',
    name: 'Suplemento Mineral Pronto Uso para Bovinos de Corte e Leite',
    category: 'agro',
    subCategory: 'Suplementação Agro',
    tag: 'Rendimento no Pasto',
    description: 'Fórmula enriquecida com micro e macroelementos para suprir carências de pastagens, promovendo ganho de peso e imunidade.',
    features: ['Resistente à umidade no cocho', 'Fósforo de alta biodisponibilidade', 'Estimula o consumo ideal de forragem'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
    badge: 'Saca de 25kg e 50kg',
    brand: 'AgroMineral',
    packSizes: ['25kg', '30kg', '50kg'],
    popular: true
  },
  {
    id: 'vermifugo-amplo-espectro',
    name: 'Vermífugo Palatável Amplo Espectro para Cães e Gatos',
    category: 'medicamentos',
    subCategory: 'Farmácia Veterinária',
    tag: 'Essencial',
    description: 'Combate vermes redondos e chatos (nematódeos e cestódeos) com segurança comprovada e dosagem fácil por quilo de peso.',
    features: ['Comprimidos fracionáveis', 'Ação rápida e segura', 'Indicado para todas as idades'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80',
    badge: 'Uso Periódico',
    brand: 'Saúde Pet',
    packSizes: ['Caixa com 4 cps', 'Caixa com 2 cps'],
    popular: false
  },
  {
    id: 'mistura-sementes-passaros',
    name: 'Mistura Premium de Sementes Limpas e Ventiladas',
    category: 'aves',
    subCategory: 'Pássaros & Gaiolas',
    tag: '100% Peneirada',
    description: 'Mix selecionado de alpiste, painço, aveia e girassol miúdo, 100% livre de poeiras e impurezas para aves canoras e silvestres.',
    features: ['Sementes de alta pureza', 'Sem poeira ou resíduos', 'Maior vitalidade para o pássaro'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80',
    badge: 'Qualidade Garantida',
    brand: 'Sementes Ema',
    packSizes: ['500g', '1kg', '5kg', 'Saco 25kg'],
    popular: false
  },
  {
    id: 'pulverizador-costal',
    name: 'Pulverizador Costal Manual 20 Litros com Bicos Extras',
    category: 'acessorios',
    subCategory: 'Equipamentos Rurais',
    tag: 'Uso no Campo & Jardim',
    description: 'Estrutura reforçada e ergonômica para aplicação de defensivos, adubos foliares e controle de pragas em pequenas e médias áreas.',
    features: ['Tanque em polietileno resistente UV', 'Alça almofadada ergonômica', 'Acompanha bicos leque e cônico'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80',
    badge: 'Garantia Direta',
    brand: 'Linha Rural',
    packSizes: ['Capacidade 20L', 'Capacidade 10L', 'Manual 5L'],
    popular: false
  },
  {
    id: 'tapete-higienico-pet',
    name: 'Tapete Higiênico Ultra Absorvente 60x60 (Pacote Econômico)',
    category: 'acessorios',
    subCategory: 'Higiene Pet',
    tag: 'Sem Vazamentos',
    description: 'Gel superabsorvente com atrativo canino e barreiras laterais antivazamento. Mantém as patinhas sempre secas.',
    features: ['Absorção ultrarrápida', 'Adesivos de fixação no piso', 'Inibidor de odores desagradáveis'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    badge: 'Pacote Econômico',
    brand: 'Higiene Master',
    packSizes: ['30 unidades', '50 unidades'],
    popular: true
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'variedade',
    title: 'Variedade Completa',
    description: 'Tudo o que você precisa em um só lugar: do pacote de ração pet aos suprimentos para criação e vida no campo.',
    iconName: 'PackageCheck'
  },
  {
    id: 'atendimento',
    title: 'Atendimento Próximo & Especializado',
    description: 'Orientação dedicada no balcão e no WhatsApp de quem realmente entende das necessidades dos animais e da rotina rural.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'praticidade',
    title: 'Praticidade & Agilidade',
    description: 'Encontre o produto certo sem complicação. Consulte valores, tire dúvidas e reserve seus pedidos pelo WhatsApp.',
    iconName: 'Zap'
  },
  {
    id: 'confianca',
    title: 'Confiança & Tradição Regional',
    description: 'Uma empresa local sólida, com produtos originais de procedência garantida, parceira de tutores e produtores.',
    iconName: 'ShieldCheck'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'compra',
    question: 'Como faço para consultar o preço ou comprar pelo WhatsApp?',
    answer: 'É super simples e rápido! Basta clicar em qualquer botão "Falar no WhatsApp" ou "Consultar Produto". Você será direcionado diretamente para o atendimento da nossa equipe, onde informamos preços, marcas disponíveis, formas de pagamento e podemos separar o seu pedido com antecedência.'
  },
  {
    id: 'faq-2',
    category: 'entrega',
    question: 'A AgroEma faz entregas na região ou posso retirar na loja?',
    answer: 'Sim! Oferecemos as duas opções. Você pode retirar seu pedido prontinho e separado no nosso balcão (com fácil estacionamento) ou solicitar a entrega no seu endereço/chácara/propriedade na nossa área de atendimento. Consulte a taxa e prazos via WhatsApp!'
  },
  {
    id: 'faq-3',
    category: 'produtos',
    question: 'Vocês vendem rações a granel e em sacaria fechada de grandes volumes?',
    answer: 'Sim! Trabalhamos tanto com sacarias fechadas de 10kg, 15kg, 20kg e 50kg (com preços especiais para criação e criadores), quanto com rações fracionadas a granel com alta rotatividade e frescor garantido.'
  },
  {
    id: 'faq-4',
    category: 'produtos',
    question: 'Os medicamentos e antipulgas vendidos na AgroEma são originais?',
    answer: '100% originais e com procedência direta dos laboratórios e distribuidores autorizados. Todos os medicamentos, vacinas e antipulgas ficam armazenados em temperatura controlada para preservar a eficácia.'
  },
  {
    id: 'faq-5',
    category: 'geral',
    question: 'Quais são as formas de pagamento aceitas na loja e na entrega?',
    answer: 'Aceitamos Pix (com confirmação instantânea), cartões de débito e crédito (com parcelamento sob consulta), e dinheiro.'
  }
];

export const WHATSAPP_MESSAGE_TEMPLATES = {
  general: 'Olá, equipe da AgroEma! Gostaria de mais informações sobre produtos e atendimento.',
  product: (productName: string) => `Olá, equipe da AgroEma! Gostaria de consultar a disponibilidade e valor do produto: *${productName}*.`,
  category: (categoryName: string) => `Olá! Gostaria de saber mais sobre as opções disponíveis na categoria *${categoryName}*.`,
  location: 'Olá! Gostaria de confirmar o endereço da loja e os horários de atendimento de hoje.',
  delivery: 'Olá! Gostaria de consultar a entrega de produtos para o meu endereço.'
};

export const createWhatsAppLink = (message: string, phone: string = STORE_INFO.whatsappClean) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
};
