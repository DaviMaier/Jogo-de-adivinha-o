import React from 'react';
import { Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      day: 'Domingo',
      time: '9:00',
      name: 'Escola Bíblica Dominical',
      description: 'Estudo bíblico para todas as idades, com classes separadas para crianças, jovens e adultos.'
    },
    {
      day: 'Domingo',
      time: '19:00',
      name: 'Culto de Celebração',
      description: 'Momento de adoração, louvor e pregação da Palavra de Deus para toda a família.'
    },
    {
      day: 'Terça-feira',
      time: '19:30',
      name: 'Culto de Ensino',
      description: 'Estudo bíblico aprofundado para crescimento espiritual e conhecimento das Escrituras.'
    },
    {
      day: 'Quinta-feira',
      time: '19:30',
      name: 'Culto de Oração',
      description: 'Momento dedicado à intercessão e busca da presença de Deus através da oração.'
    },
    {
      day: 'Sábado',
      time: '19:30',
      name: 'Culto de Jovens',
      description: 'Encontro voltado para os jovens com louvor, dinâmicas e mensagem contextualizada.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nossos Cultos</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Venha participar de nossos cultos e experimentar a presença de Deus. 
            Temos programações para toda a família durante a semana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-xl font-semibold">{service.day}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-700 mr-2" />
                  <span className="text-lg font-medium">{service.time}h</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">{service.name}</h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Eventos Especiais</h3>
            <p className="text-gray-700 mb-6">
              Além de nossos cultos regulares, realizamos eventos especiais como conferências, 
              vigílias e campanhas de oração. Fique atento às nossas redes sociais para mais informações.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Ver Calendário Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;