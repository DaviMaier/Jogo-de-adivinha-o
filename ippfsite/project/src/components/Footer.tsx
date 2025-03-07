import React from 'react';
import { Dribbble as Bible, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Bible className="h-8 w-8 text-white" />
              <div className="ml-2">
                <h3 className="text-xl font-bold">Igreja Pentecostal</h3>
                <p className="text-sm text-blue-300">Palavra da Fé</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6">
              Uma igreja comprometida com a Palavra de Deus e a manifestação do poder do Espírito Santo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Cultos</a></li>
              <li><a href="#sermons" className="text-blue-200 hover:text-white transition-colors">Mensagens</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Ministérios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Jovens</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Crianças</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Mulheres</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Homens</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Louvor</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Boletim Informativo</h3>
            <p className="text-blue-200 mb-4">
              Inscreva-se para receber nossas atualizações e informações sobre eventos.
            </p>
            <form>
              <div className="flex mb-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors"
                >
                  Enviar
                </button>
              </div>
              <p className="text-xs text-blue-300">
                Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-300">
            &copy; {new Date().getFullYear()} Igreja Pentecostal Palavra da Fé. Todos os direitos reservados.
          </p>
          <p className="text-blue-400 text-sm mt-2">
            "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus." - Efésios 2:8
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;