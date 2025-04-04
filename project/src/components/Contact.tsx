import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-pink-600 mr-3" />
                  <span>(71) 98828-7504</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-pink-600 mr-3" />
                  <span>contato@beautyacademy.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-pink-600 mr-3" />
                  <span>Av. Oceânica, 3638 - Edifício Qualidados Empresarial, sala 301 - Rio Vermelho/Ondina</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-pink-600 mr-3" />
                  <span>Seg - Sáb: 9h às 19h</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Localização</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.555279459168!2d-38.50035029999999!3d-13.010893699999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716039285c18ed1%3A0x78b4886d2aadca90!2sGisele%20Fran%C3%A7a%20-%20MICROPIGMENTA%C3%87%C3%83O%20E%20EST%C3%89TICA!5e0!3m2!1spt-BR!2sbr!4v1743604090445!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
