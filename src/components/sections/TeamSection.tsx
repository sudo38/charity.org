import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import { teamMembers } from '../../data/mockData';

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-teal-700 font-medium">تعرّف على فريقنا</span>
            <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
              <Heart className="text-white" size={16} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            فريقنا المتفاني في <span className="text-yellow-500">خدمة</span>
            <br />
            القضايا العادلة
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/50 to-transparent z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 right-0 left-0 p-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-right">{member.name}</h3>
                  <p className="text-teal-100 text-sm text-right">{member.role}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg z-20">
                <span className="text-2xl">👤</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="gap-2 group">
            <span>مزيد عن فريقنا</span>
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Heart({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
