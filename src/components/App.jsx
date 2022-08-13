import Header from './Header/Header';
import Hero from './Hero/Hero';
import UndrawMob from './UndrawMob/UndrawMob';
import IntroSection from './IntroSection/IntroSection';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <UndrawMob />
        <IntroSection />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
