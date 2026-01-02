import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { donationProjects } from '../../data/mockData';

export default function DonationProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const visibleCards = 3;
  const maxIndex = Math.max(0, donationProjects.length - visibleCards);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-teal-700 font-medium">نبدأ بدعم المحتاجين</span>
            <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
              <span className="text-xl">🌱</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            كن <span className="text-yellow-500">عونًا</span> لهم في أوقات المحن
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${currentIndex * (100 / visibleCards)}%)` }}
            >
              {donationProjects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[calc(100%-2rem)] md:min-w-[calc(33.333%-1rem)] bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {project.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-right">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-right mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <Button variant="secondary" size="md" className="w-full gap-2">
                      <Heart size={18} />
                      <span>تبرّع الآن</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
