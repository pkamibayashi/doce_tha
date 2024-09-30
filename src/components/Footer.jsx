import CupcakeIcon from './CupcakeIcon';

const Footer = () => (
  <footer id='contato' className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h4 className="text-2xl font-bold mb-4 font-serif flex items-center justify-center md:justify-start">
            <CupcakeIcon className="w-6 h-6 mr-2 text-pink-400" />
            Docinhos da Tha
          </h4>
          <p className="text-gray-300">Av. Clovis Ferraz de Camargo, 380, Indaiatuba-SP</p>
          <p className="text-gray-300">Telefone: (XX) XXXXX-XXXX</p>
        </div>
        <div className="flex space-x-6">
          {["Instagram", "Facebook", "Twitter"].map((item, index) => (
            <a key={index} href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.08 8.14 8.88v-6.28h-2.44v-2.6h2.44v-1.98c0-2.42 1.48-3.74 3.64-3.74 1.04 0 1.94.08 2.2.11v2.55h-1.51c-1.18 0-1.41.56-1.41 1.38v1.82h2.82l-.37 2.6h-2.45v6.28c4.56-.8 8.14-4.46 8.14-8.88 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Docinhos da Tha. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
