import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutUs } from './components/AboutUs';
import { LocationSection } from './components/LocationSection';
import { FAQ } from './components/FAQ';
import { ConversionCTA } from './components/ConversionCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedCatFilter, setSelectedCatFilter] = useState<string | undefined>(undefined);

  const handleSelectCategory = (catName: string) => {
    setSelectedCatFilter(catName);
    const elem = document.getElementById('produtos');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#20241F] selection:bg-[#5D8C3A] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Categorias (Linha Pet & Linha Agro) */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 3. Por que escolher a AgroEma */}
        <WhyChooseUs />

        {/* 4. Vitrine de Produtos & Destaques com Busca Interativa */}
        <ProductCatalog initialCategoryFilter={selectedCatFilter} />

        {/* 5. Sobre Nós & Propósito */}
        <AboutUs />

        {/* 6. Localização, Horários & Como Chegar */}
        <LocationSection />

        {/* 7. Dúvidas Frequentes (FAQ) */}
        <FAQ />

        {/* 8. CTA de Conversão Pré-Footer */}
        <ConversionCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget & Mobile Conversion Bar */}
      <FloatingWhatsApp />
    </div>
  );
}
