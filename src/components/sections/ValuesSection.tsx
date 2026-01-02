import { Users, Gift, Heart, Shield, ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import { values } from '../../data/mockData';

export default function ValuesSection() {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      users: <Users size={32} />,
      gift: <Gift size={32} />,
      heart: <Heart size={32} />,
      shield: <Shield size={32} />,
    };
    return icons[iconName] || <Heart size={32} />;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-teal-700 font-medium">نبدأ بتعريف بمبادئنا</span>
            <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
              <span className="text-xl">🌱</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            مساعدة بعضنا البعض يمكن أن
            <br />
            تجعل <span className="text-yellow-500">العالم</span> أفضل
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-3xl bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/6995239/pexels-photo-6995239.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            }}
          ></div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {getIcon(value.icon)}
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="primary" size="lg" className="gap-2 group">
                <span>المزيد عن الجمعية</span>
                <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
