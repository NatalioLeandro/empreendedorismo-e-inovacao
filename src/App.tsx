import images from "./images";
import logoLarge from "./assets/logo-large.jpg";

import { useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-custom-brown text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold">Empório da Torta</h1>
          
          {/* Botão do menu mobile com estilo melhorado */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Menu de navegação */}
          <div className={`w-full md:w-auto md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0">
              <a href="#home" className="hover:text-orange-200">
                Início
              </a>
              <a href="#products" className="hover:text-orange-200">
                Produtos
              </a>
              <a href="#about" className="hover:text-orange-200">
                Sobre
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[72px]"></div>
    </>
  );
};

function App() {
  const handleScroll = (): void => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-b from-orange-100 to-white"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Tortas Artesanais com Sabor de Casa
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Descubra o sabor único das nossas tortas salgadas, feitas com
                ingredientes selecionados e muito carinho. Venha nos conhecer na
                <span className="font-bold">
                  {" "}
                  quinta-feira, 13/02/2025, das 18h às 20h, no Hall de entrada
                  do IFPI Campus Corrente
                </span>
                .
              </p>

              <button
                onClick={handleScroll}
                className="bg-custom-brown text-white px-8 py-3 rounded-full hover:bg-custom-brown-dark transition duration-300"
                type="button"
              >
                Saiba Mais
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={logoLarge}
                alt="Torta Salgada"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossas Especialidades
          </h2>
          <p className="text-center text-gray-500 italic mb-8">
            *Imagens e preços meramente ilustrativos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Frango com Catupiry",
                price: "Fátia: R$ 6,00",
                img: images[0][1],
              },
              {
                name: "Frango Especial",
                price: "Fátia: R$ 6,00",
                img: images[1][2],
              },
              {
                name: "Frango com Legumes",
                price: "Fátia: R$ 6,00",
                img: images[2][3],
              },
            ].map((torta, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <img
                  src={torta.img}
                  alt={torta.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{torta.name}</h3>
                <p className="text-custom-brown font-bold mb-4">
                  {torta.price}
                </p>
                <a
                  href="https://wa.me/qr/QMX2TBTHP5MSN1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-custom-brown text-white px-8 py-3 rounded-full hover:bg-custom-brown-dark transition duration-300"
                >
                  Saiba Mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={logoLarge}
                alt="Nossa História"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Saiba Mais</h2>
              <p className="text-gray-600 mb-4">
                Site criado para a promoção do produto que será vendido no dia
                13/02/2025, durante a Feira de Empreendedorismo e Inovação.
                Oferecemos tortas feitas com receitas tradicionais e
                ingredientes selecionados, garantindo sabor e qualidade.
              </p>
              <p className="text-gray-600">
                Cada torta é feita com dedicação e amor!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-600"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-600"
                />
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-orange-600"
                />
              </div>
              <textarea
                placeholder="Mensagem"
                rows="4"
                className="w-full px-4 py-2 border rounded mt-6 focus:outline-none focus:border-orange-600"
              ></textarea>
              <button className="mt-6 bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition duration-300 w-full">
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Empório da Torta</h3>
              <p className="text-gray-400">Tortas artesanais</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-400">
                Email: cacor.2022121tads0001@aluno.ifpi.edu.br
                <br/>Acadêmicos: Leandro Natálio e Rayline Mendes
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário</h3>
              <p className="text-gray-400">Quinta-feira</p>
              <p className="text-gray-400">18:00 - 20:00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Empório da Torta. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm italic">
              *As imagens e preços apresentados neste site são meramente
              ilustrativos
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
