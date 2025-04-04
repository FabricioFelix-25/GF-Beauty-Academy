import { MessageCircle } from 'lucide-react';

function Cursos() {
  return (
    <section id="cursos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Curso 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Design de Sobrancelhas Iniciantes</h3>
            <p className="text-pink-600 font-bold mb-4">R$ 300</p>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              <MessageCircle size={18} className="mr-2" />
              Inscrever-se
            </a>
          </div>

          {/* Curso 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Design de Sobrancelhas Especialização</h3>
            <p className="text-pink-600 font-bold mb-4">R$ 450</p>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              <MessageCircle size={18} className="mr-2" />
              Inscrever-se
            </a>
          </div>

          {/* Curso 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Micropigmentação 3x1 Iniciantes</h3>
            <p className="text-pink-600 font-bold mb-4">R$ 350</p>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              <MessageCircle size={18} className="mr-2" />
              Inscrever-se
            </a>
          </div>

          {/* Curso 4 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Micropigmentação Especialização em Shadignline</h3>
            <p className="text-pink-600 font-bold mb-4">R$ 650</p>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              <MessageCircle size={18} className="mr-2" />
              Inscrever-se
            </a>
          </div>

          {/* Curso 5 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Micropigmentação Especialização VIP - 1 técnicas</h3>
            <p className="text-pink-600 font-bold mb-4">R$ 850</p>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              <MessageCircle size={18} className="mr-2" />
              Inscrever-se
            </a>
          </div>

          {/* Curso 6 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Extensão de Cílios + Bônus</h3>
            <p className="text-pink-600 font-bold mb-4">R$ 550</p>
            <a
              href="https://wa.me/seunumerodetelefone"
              target="_blank"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              <MessageCircle size={18} className="mr-2" />
              Inscrever-se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cursos;
