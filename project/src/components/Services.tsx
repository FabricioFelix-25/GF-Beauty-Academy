import React from 'react';
import { MessageCircle } from 'lucide-react';

const services = [
  {
    category: 'Sobrancelhas',
    items: [
      { name: 'Micropigmentação de Sobrancelhas', price: 'R$ 500' },
      { name: 'Brows Lamination', price: 'R$ 150' },
      { name: 'Remoção a Laser', price: 'R$ 70' },
      { name: 'Extensão de Cílios', price: 'R$ 70' },
      { name: 'Design Personalizado', price: 'R$ 80' },
    
    ]
  },
  {
    category: 'Lábios',
    items: [
      { name: 'Micropigmentação Labial', price: 'R$ 100' },
    ]
  },
  // Add other service categories...
];

const Services = () => {
  const formatWhatsAppMessage = (service: string) => {
    const message = `Olá! Gostaria de agendar um horário para ${service}`;
    return `https://wa.me/5571988287504?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.category}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className="text-pink-600 font-semibold">{item.price}</span>
                      </div>
                      <a
                        href={formatWhatsAppMessage(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Agendar
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;