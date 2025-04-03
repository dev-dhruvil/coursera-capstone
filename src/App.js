import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Highlights from './Components/Highlights';
// import Reservations from './Components/Reservations';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
        {/* <Reservations /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
