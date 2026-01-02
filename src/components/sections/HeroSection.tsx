import { Heart, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right space-y-6 order-2 md:order-1 relative z-10">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-4">
              <span className="text-yellow-400 text-sm font-medium">نبدأ بمشروع ثلاثمائي المحتاجين</span>
              <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              نحن منظمة
              <br />
              <span className="text-yellow-400">خيرية غير ربحية</span>
              <br />
              <span className="text-yellow-400">عالمية</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mr-0">
              نريد منحة تغيير وبناء مستقبل النشء الطيب لكل طفل، لكل جريح من المحتاجين المشردين باختلاف
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end pt-4">
              <Button variant="primary" size="lg" className="gap-2">
                <Heart size={20} />
                <span>تبرّع الآن</span>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <MessageCircle size={20} />
                <span>طلب استشارة</span>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="مساعدات"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/6646895/pexels-photo-6646895.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="أطفال"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/6995220/pexels-photo-6995220.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="مساعدات إنسانية"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="غذاء"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
