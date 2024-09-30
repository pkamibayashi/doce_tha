import React, { useState } from 'react'
import { Menu, X, Home, ShoppingBag, Info, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-pink-100 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img
                  src="src\assets\logo.png"
                  alt="da tha logo"
                  width={100}
                  height={100}
                  className="ml-4 mt-2 h-10 w-14 mr-2 bg-transparent" // Remove the "bg-transparent" class to make the image background transparent
                  style={{ transform: 'scale(3.5)' }} // Add this style to apply a zoom of 1.2 to the image
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-4 px-2 text-pink-500 border-b-4 border-pink-500 font-semibold">Home</a>
              <a href="#featured-candies" onClick={(e) => scrollToSection(e, 'featured-candies')} className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Produtos</a>
              <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Sobre Nós</a>
              <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="py-4 px-2 text-gray-500 font-semibold hover:text-pink-500 transition duration-300">Contato</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="py-2 px-2 font-medium text-white bg-pink-500 rounded hover:bg-pink-400 transition duration-300">Log In</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-pink-200 text-gray-500 font-semibold">
          <Home className="inline-block mr-2 h-5 w-5" /> Home
        </a>
        <a href="#featured-candies" onClick={(e) => scrollToSection(e, 'featured-candies')} className="block py-2 px-4 text-sm hover:bg-pink-200 text-gray-500 font-semibold">
          <ShoppingBag className="inline-block mr-2 h-5 w-5" /> Produtos
        </a>
        <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="block py-2 px-4 text-sm hover:bg-pink-200 text-gray-500 font-semibold">
          <Info className="inline-block mr-2 h-5 w-5" /> Sobre Nós
        </a>
        <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="block py-2 px-4 text-sm hover:bg-pink-200 text-gray-500 font-semibold">
          <Phone className="inline-block mr-2 h-5 w-5" /> Contato
        </a>
        <a href="#" className="block py-2 px-4 text-sm bg-pink-500 text-white font-semibold">Log In</a>
      </div>
    </nav>
  )
}