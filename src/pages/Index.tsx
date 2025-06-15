
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { MenuSection } from '@/components/MenuSection';
import { Specials } from '@/components/Specials';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <MenuSection />
        <Specials />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
