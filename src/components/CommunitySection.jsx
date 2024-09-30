import React, { useState } from 'react';
import CupcakeIcon from './CupcakeIcon'; // Certifique-se de importar o ícone corretamente

const CommunitySection = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const cleanedValue = inputValue.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Limita o número de caracteres a 11 (2 para DDD + 9 para o número) ou 10 (2 para DDD + 8 para o número)
    if (cleanedValue.length > 11) {
      return;
    }

    const formattedValue = formatPhoneNumber(cleanedValue);
    setInputText(formattedValue);
  };

  const formatPhoneNumber = (value) => {
    // Remove todos os caracteres não numéricos
    const cleaned = ('' + value).replace(/\D/g, '');

    // Match the cleaned value with the desired format
    const matchLong = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    const matchShort = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);

    if (matchLong) {
      return `(${matchLong[1]}) ${matchLong[2]}-${matchLong[3]}`;
    } else if (matchShort) {
      return `(${matchShort[1]}) ${matchShort[2]}-${matchShort[3]}`;
    }

    return cleaned;
  };

  return (
    <section className="container mx-auto px-4 py-16  md:py-32 ">
      <div className="bg-pink-100 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif flex items-center justify-center">
          <CupcakeIcon className="w-8 h-8 mr-4 text-pink-600" />
          Junte-se a nossa comunidade
          <CupcakeIcon className="w-8 h-8 ml-4 text-pink-600" />
        </h3>
        <p className="text-xl text-gray-600 mb-10">
          Inscreva-se para ofertas exclusivas, novos sabores e surpresas doces!
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
              placeholder="(xx) xxxxx-xxxx"
              className="flex-grow px-6 py-3 rounded-full text-gray-800 border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors duration-300"
              required
              value={inputText}
              onChange={handleInputChange}
              maxLength={15} // Limita o número de caracteres no input
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors duration-300"
            >
              Inscrever-se
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommunitySection;