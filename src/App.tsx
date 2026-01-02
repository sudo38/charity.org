import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import OrphanSponsorshipSection from './components/sections/OrphanSponsorshipSection';
import DonationProjectsSection from './components/sections/DonationProjectsSection';
import StatisticsSection from './components/sections/StatisticsSection';
import TeamSection from './components/sections/TeamSection';
import ValuesSection from './components/sections/ValuesSection';
import ActivitiesGallerySection from './components/sections/ActivitiesGallerySection';
import NewsSection from './components/sections/NewsSection';

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <HeroSection />
        <OrphanSponsorshipSection />
        <DonationProjectsSection />
        <StatisticsSection />
        <TeamSection />
        <ValuesSection />
        <ActivitiesGallerySection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
