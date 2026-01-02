import { Menu, Phone, Mail, MapPin } from 'lucide-react';
import Button from './ui/Button';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-gray-600">
              <a href="tel:+213797469531" className="flex items-center gap-2 hover:text-teal-700 transition-colors">
                <Phone size={16} />
                <span className="hidden md:inline">+213-797-469-31</span>
              </a>
              <a href="mailto:contact@albaraka-dz.com" className="flex items-center gap-2 hover:text-teal-700 transition-colors">
                <Mail size={16} />
                <span className="hidden md:inline">contact@albaraka-dz.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span className="hidden md:inline">جمعية البركة الخيرية الجزائرية - الجزائر</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-700 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl text-yellow-400">🌱</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-teal-800">جمعية البركة الخيرية</h1>
              <p className="text-xs text-gray-600">للعمل الإنساني والإغاثة</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">من نحن</a>
            <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">المشاريع</a>
            <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">الفريق الإداري</a>
            <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">الأخبار</a>
            <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">اتصل بنا</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm">
              تبرّع الآن
            </Button>
            <button className="lg:hidden text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
