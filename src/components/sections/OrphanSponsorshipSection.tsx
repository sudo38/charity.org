import ProgressBar from '../ui/ProgressBar';
import Button from '../ui/Button';
import { orphanProject } from '../../data/mockData';

export default function OrphanSponsorshipSection() {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('ar-SA');
  };

  return (
    <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {orphanProject.title}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <ProgressBar percentage={orphanProject.percentage} />
              <div className="absolute -top-8 right-0 bg-teal-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                {orphanProject.percentage}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">المبلغ المحقق</p>
                <p className="text-3xl font-bold text-teal-700">{formatCurrency(orphanProject.currentAmount)}</p>
                <p className="text-gray-500 text-sm mt-1">درهم</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">المبلغ المطلوب</p>
                <p className="text-3xl font-bold text-gray-800">{formatCurrency(orphanProject.targetAmount)}</p>
                <p className="text-gray-500 text-sm mt-1">درهم</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-bold mb-3 text-center">لنبدأ بالمساهمة في دعم أطفال غزة</h3>
              <p className="text-center text-teal-50 mb-6">
                تحيّن عيالة الأطفال في معارضه للعيش بطمأنينة وسلام يمكن مساعدة الأطفال بمبلغ من 20 إلى 200 درهم، قدّ متزا في الشهر.
              </p>
              <div className="flex justify-center">
                <Button variant="primary" size="lg" className="shadow-xl hover:scale-105 transform transition-transform">
                  ساهم في التبرّع
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
