import React, { useState, useEffect } from 'react';

const useTypingEffect = (text, delay) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return currentText;
};

const scrollToSection = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};

export default function MainSection() {
  const headingText = useTypingEffect('Delicie-se com a doce perfeição', 100);
  const paragraphText = useTypingEffect('Docinhos feitos a mão e confeitados para transformar momentos em memórias', 50);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-pink-50 border-solid">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="icing" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFD1DC" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
            <linearGradient id="cake" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F4A460" />
              <stop offset="100%" stopColor="#8B4513" />
            </linearGradient>
            <radialGradient id="sprinkles" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FF1493" />
              <stop offset="100%" stopColor="#FF69B4" />
            </radialGradient>
          </defs>
          <g transform="translate(450, 400) scale(1.5)">
            {/* Cupcake wrapper */}
            {/* <path d="M50,180 Q-10,120 50,60 Q110,120 50,180 Z" fill="#8B4513" /> */}
            {/* <path d="M50,175 Q-5,120 50,65 Q105,120 50,175 Z" fill="#D2691E" /> */}
            
            {/* Cake base */}
            <path d="M0,60 Q50,0 100,60 L100,100 Q50,160 0,100 Z" fill="url(#cake)" />
            
            {/* Icing */}
            <path d="M0,70 Q50,-20 100,70 Q90,80 75,75 Q60,72 50,80 Q40,72 25,75 Q10,80 0,70 Z" fill="url(#icing)" />
            
            {/* Icing details */}
            <path d="M10,65 Q25,55 40,65 M60,65 Q75,55 90,65" stroke="#FFB6C1" strokeWidth="3" fill="none" />
            
            {/* Cherry */}
            <circle cx="50" cy="30" r="10" fill="#FF0000" />
            <path d="M50,30 Q60,0 70,10" stroke="#228B22" strokeWidth="2" fill="none" />
            
            {/* Sprinkles */}
            <circle cx="25" cy="45" r="3" fill="url(#sprinkles)" />
            <circle cx="40" cy="35" r="3" fill="url(#sprinkles)" />
            <circle cx="60" cy="35" r="3" fill="url(#sprinkles)" />
            <circle cx="75" cy="45" r="3" fill="url(#sprinkles)" />
            <circle cx="35" cy="55" r="3" fill="url(#sprinkles)" />
            <circle cx="65" cy="55" r="3" fill="url(#sprinkles)" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2
          className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 min-h-[80px]"
        >
          {headingText}
        </h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed min-h-[60px]">
          {paragraphText}
        </p>
        <div className="flex justify-center">
          <button
            onClick={(e) => scrollToSection(e, 'featured-candies')}
            className="bg-pink-600 hover:bg-pink-500 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center"
          >
            Explore nossas tentações
            <svg
              className="ml-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}