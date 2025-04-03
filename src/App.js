import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Highlights from './Components/Highlights';
import Reservations from './Components/Reservations';
import Testimonials from './Components/Testimonials';

function App() {
  const Home = () => {
    return (
      <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </main>
    )
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
