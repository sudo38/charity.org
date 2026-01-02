import { Building, Users, Heart, Briefcase } from 'lucide-react';
import Counter from '../ui/Counter';
import { statistics } from '../../data/mockData';

export default function StatisticsSection() {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      building: <Building size={40} />,
      users: <Users size={40} />,
      heart: <Heart size={40} />,
      briefcase: <Briefcase size={40} />,
    };
    return icons[iconName] || <Heart size={40} />;
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6646981/pexels-photo-6646981.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-teal-900/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white shadow-2xl">
                  {getIcon(stat.icon)}
                </div>
              </div>
              <div className="text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
