import React from 'react';
import CupcakeIcon from './CupcakeIcon'; // Certifique-se de importar o ícone corretamente

const AboutUsSection = () => {
  return (
    <section id='sobre' className="container mx-auto px-4 py-16 md:py-32">
      <div className="bg-pink-100 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif flex items-center justify-center">
          <CupcakeIcon className="w-8 h-8 mr-4 text-pink-600" />
          Sobre Nós
          <CupcakeIcon className="w-8 h-8 ml-4 text-pink-600" />
        </h3>
        <p className="text-xl text-gray-600 mb-10">
          Bem-vindo à Docinhos da Tha! Somos uma confeitaria dedicada a criar doces artesanais que transformam momentos em memórias. Nossa paixão por confeitaria é refletida em cada bolo, cupcake e sobremesa que fazemos. Usamos apenas os melhores ingredientes para garantir que cada mordida seja uma experiência deliciosa.
        </p>
        <p className="text-xl text-gray-600 mb-10">
          Estamos sempre dispostos a inovar e criar novos sabores para surpreender e encantar nossos clientes. Seja para uma festa de aniversário, casamento ou simplesmente para satisfazer seu desejo por doces, estamos aqui para tornar cada ocasião especial.
        </p>
        <p className="text-xl text-gray-600 mb-10">
          Obrigado por escolher a Docinhos da Tha. Esperamos que nossos doces tragam um sorriso ao seu rosto e alegria ao seu coração.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
