import Header from './Header/Header';
import Hero from './Hero/Hero';
import UndrawMob from './UndrawMob/UndrawMob';
import IntroSection from './IntroSection/IntroSection';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <UndrawMob />
        <IntroSection />
      </main>
    </>
  );
}
