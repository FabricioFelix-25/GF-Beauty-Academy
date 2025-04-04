import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: '/imagens/Micropigmentação%20de%20sobran.png',  // Caminho para a imagem que foi colocada dentro da pasta public
      title: 'Design de Sobrancelhas'
    },
    {
      url: '/imagens/sombrancelhaFeita.png',
      title: 'Tratamento Facial'
    },
    {
      url: '/imagens/labioss.png',
      title: 'Maquiagem Profissional'
    },
    {
      url: '/imagens/sombrancelhaG.png',
      title: 'Extensão de Cílios'
    },
    {
      url: '/imagens/laserr.png',
      title: 'Micropigmentação'
    },
    {
      url: '/imagens/cilioss.png',
      title: 'Unhas Decoradas'
    }
  ];

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}  // Caminho correto para a imagem
                alt={image.title}
                className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
