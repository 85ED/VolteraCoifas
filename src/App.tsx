import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sun, Moon, Phone, Mail, MapPin, Home, Shield, Wrench, Instagram } from 'lucide-react';
import { NavBar } from './components/ui/tubelight-navbar';
import { Home as HomePage } from './pages/Home';
import { Regulations } from './pages/Regulations';
import { Portfolio } from './pages/Portfolio';
import { VisitCounter } from './components/blocks/visit-counter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { name: 'Limpeza de Coifas', url: '/', icon: Home },
    { name: 'Portfólio', url: '/portfolio', icon: Wrench },
    { name: 'Portaria', url: '/regulations', icon: Shield },
    { name: 'Contato', url: '#contact', icon: Phone }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
          {/* Header */}
          <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link to="/" className="flex items-center">
                  <img 
                    src="https://raw.githubusercontent.com/85ED/VolteraCoifas/main/logo.png"
                    alt="Voltera Coifas"
                    className="h-10 md:h-12 w-auto object-contain max-w-[150px] md:max-w-[200px]"
                  />
                </Link>
                <div className="flex-1 flex justify-center">
                  <NavBar items={navItems} />
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/regulations" element={<Regulations />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>

          {/* Contact Section */}
          <section id="contact" className="py-8 md:py-12 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800 dark:text-white">Entre em Contato</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Telefone</h3>
                      <p className="text-gray-600 dark:text-gray-300">(11) 2386-7612</p>
                      <p className="text-gray-600 dark:text-gray-300">(11) 96029-7939 (WhatsApp)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">tecnico@volteracoifas.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Área de Atendimento</h3>
                      <p className="text-gray-600 dark:text-gray-300">São Paulo - Capital e Interior<br />Litoral e Minas Gerais</p>
                    </div>
                  </div>
                </div>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-semibold transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8 md:py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Logo and Company Info */}
                <div className="space-y-4 md:space-y-6">
                  <Link to="/">
                    <img 
                      src="https://raw.githubusercontent.com/85ED/VolteraCoifas/main/logo.png"
                      alt="Voltera Coifas"
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  </Link>
                  <p className="text-gray-400 max-w-sm">
                    Especialistas em limpeza e manutenção de coifas, atendendo São Paulo - Capital, Interior, Litoral e Minas Gerais desde 2003.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Dados de Contato:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <div>
                        <p>(11) 2386-7612</p>
                        <p>(11) 96029-7939 (WhatsApp)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <p>tecnico@volteracoifas.com.br</p>
                    </div>
                  </div>
                </div>

                {/* Social Media and Visit Counter */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Redes Sociais</h3>
                    <a 
                      href="https://www.instagram.com/volteracoifasabc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                      <span>@volteracoifasabc</span>
                    </a>
                  </div>
                  <VisitCounter />
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-xs md:text-sm text-gray-400">
                    © 2003 - {currentYear} Voltera Coifas e Manutenção. Todos os direitos reservados.
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">
                    O plágio é considerado crime (Lei 9.610)
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App