import React from 'react';
import { Dribbble as Bible, Clock, MapPin, Phone, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative text-gray-100">
      {/* Background overlay with cross image */}
      <div 
        className="fixed inset-0 z-0 transition-opacity duration-700"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.25)'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-b from-black/80 to-transparent p-8">
          <div className="container mx-auto text-center">
            <Bible className="w-20 h-20 mx-auto mb-6 text-yellow-100/80" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-white">
              Igreja Pentecostal Palavra da Fé
            </h1>
            <p className="text-2xl italic text-yellow-100/80">"Porque pela fé andamos, não pelo que vemos"</p>
          </div>
        </header>

        {/* Main sections */}
        <main className="container mx-auto px-4 py-16 space-y-24">
          {/* About Section */}
          <section className="backdrop-blur-sm bg-black/40 p-10 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-4xl font-bold mb-8 text-yellow-100/90">Sobre Nós</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              [Insira aqui a descrição da igreja e sua missão]
            </p>
          </section>

          {/* Service Times */}
          <section className="backdrop-blur-sm bg-black/40 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold mb-8 text-yellow-100/90 flex items-center gap-3">
              <Clock className="w-8 h-8" />
              Horários dos Cultos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 hover:border-yellow-100/30 transition-colors">
                <h3 className="text-2xl font-semibold mb-3">Culto de Celebração</h3>
                <p className="text-lg text-gray-300">[Insira o horário]</p>
              </div>
              <div className="p-6 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 hover:border-yellow-100/30 transition-colors">
                <h3 className="text-2xl font-semibold mb-3">Culto de Oração</h3>
                <p className="text-lg text-gray-300">[Insira o horário]</p>
              </div>
            </div>
          </section>

          {/* Events */}
          <section className="backdrop-blur-sm bg-black/40 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold mb-8 text-yellow-100/90 flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Próximos Eventos
            </h2>
            <div className="space-y-6">
              <div className="p-6 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 hover:border-yellow-100/30 transition-colors">
                <h3 className="text-2xl font-semibold mb-2">[Nome do Evento]</h3>
                <p className="text-lg text-gray-300">[Data e descrição do evento]</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="backdrop-blur-sm bg-black/40 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold mb-8 text-yellow-100/90">Contato</h2>
            <div className="space-y-6">
              <p className="flex items-center gap-3 text-xl">
                <MapPin className="w-6 h-6 text-yellow-100/80" />
                <span className="text-gray-300">[Insira o endereço completo]</span>
              </p>
              <p className="flex items-center gap-3 text-xl">
                <Phone className="w-6 h-6 text-yellow-100/80" />
                <span className="text-gray-300">[Insira o telefone]</span>
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-t from-black/90 to-transparent py-10 mt-24">
          <div className="container mx-auto text-center">
            <p className="text-lg text-yellow-100/80">© {new Date().getFullYear()} Igreja Pentecostal Palavra da Fé</p>
            <p className="mt-3 text-lg text-gray-400">"Pregando a palavra da fé em Cristo Jesus"</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;