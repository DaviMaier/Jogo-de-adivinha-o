import React from 'react';

const Sermons: React.FC = () => {
  const sermons = [
    {
      title: 'O Poder da Fé',
      scripture: 'Hebreus 11:1-6',
      date: '24/09/2023',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Vivendo no Espírito',
      scripture: 'Gálatas 5:16-25',
      date: '17/09/2023',
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'A Família Segundo Deus',
      scripture: 'Efésios 5:22-6:4',
      date: '10/09/2023',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'O Chamado para Servir',
      scripture: 'Mateus 20:25-28',
      date: '03/09/2023',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Mensagens Recentes</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Confira as mensagens mais recentes do Pastor Emerson Casburgo e seja edificado pela Palavra de Deus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sermons.map((sermon, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sermon.image} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-blue-700 font-medium">{sermon.date}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">Sermão</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{sermon.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{sermon.scripture}</p>
                <button className="text-blue-700 hover:text-blue-900 font-medium flex items-center">
                  Assistir Sermão
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Ver Todas as Mensagens
          </button>
        </div>
        
        <div className="mt-20 bg-blue-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Inscreva-se em Nosso Canal</h3>
              <p className="text-gray-700 mb-6">
                Acompanhe nossas transmissões ao vivo e tenha acesso a todas as mensagens 
                em nosso canal do YouTube. Inscreva-se e ative as notificações!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                Inscrever-se no YouTube
              </button>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Transmissão ao vivo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white bg-opacity-90 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sermons;