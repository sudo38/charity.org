import { Calendar, ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import { news } from '../../data/mockData';

export default function NewsSection() {
  const featuredNews = news.find((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-teal-700 font-medium">آخر الأخبار من موقعنا</span>
            <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
              <span className="text-xl">📰</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            تتبّع <span className="text-yellow-500">جديد</span> البركة الجزائرية
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredNews && (
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-[500px]">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              <div className="absolute top-6 right-6">
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
                  <Calendar size={16} />
                  <span>منذ {featuredNews.daysAgo} يوم</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-right leading-tight">
                  {featuredNews.title}
                </h3>
                <button className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 transition-colors">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={20} />
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {otherNews.map((newsItem) => (
              <div
                key={newsItem.id}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[238px]"
              >
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg">
                    <Calendar size={14} />
                    <span>منذ {newsItem.daysAgo} يوم</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2 text-right line-clamp-2 leading-tight">
                    {newsItem.title}
                  </h3>
                  <button className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold flex items-center gap-2 transition-colors">
                    <span>اقرأ المزيد</span>
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="gap-2 group">
            <span>جميع الأخبار</span>
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
