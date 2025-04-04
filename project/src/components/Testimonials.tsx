import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Bruna Fabian',
      text: 'Atendimento excepcional! A micropigmentação ficou perfeita, exatamente como eu queria.',
      rating: 5
    },
    {
      name: 'vitor Gabriel',  
      text: 'Amei minha sombrancelhja e cilios novos! O ambiente é super acolhedor e as profissionais são incríveis.',
      rating: 5
    },
    {
      name: 'Efraim',
      text: 'Melhor salão que já frequentei. O design de sobrancelhas ficou incrível!',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;