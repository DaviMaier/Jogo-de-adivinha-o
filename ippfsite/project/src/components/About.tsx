import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sobre Nossa Igreja</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Pastor Emerson Casburgo" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Pastor Emerson Casburgo</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Bem-vindos à Igreja Pentecostal Palavra da Fé, um lugar onde a Palavra de Deus é pregada com poder e autoridade. 
              Nossa missão é levar a mensagem transformadora do evangelho a todas as pessoas, 
              edificando vidas através do ensino bíblico e da manifestação do Espírito Santo.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sob a liderança do Pastor Emerson Casburgo, nossa igreja tem sido um farol de esperança 
              e restauração para muitas famílias. Acreditamos que Deus continua operando milagres hoje, 
              e que através da fé em Jesus Cristo, vidas são transformadas e restauradas.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Nossa Visão</h4>
              <p className="text-gray-700">
                Ser uma igreja que manifesta o Reino de Deus na terra, formando discípulos comprometidos 
                com Cristo e impactando a sociedade com os valores do Evangelho.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Fé</h3>
            <p className="text-gray-700">
              Cremos que a fé é o fundamento da nossa caminhada cristã, e que por meio dela 
              recebemos as promessas de Deus para nossas vidas.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Família</h3>
            <p className="text-gray-700">
              Valorizamos a família como instituição divina e trabalhamos para fortalecer 
              os laços familiares através do ensino da Palavra.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Comunhão</h3>
            <p className="text-gray-700">
              Promovemos um ambiente de amor e comunhão, onde todos são acolhidos 
              e podem crescer espiritualmente juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;