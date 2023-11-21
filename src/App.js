import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FindSection from './Components/FindSection';
import Drive from './Components/Drive/Drive';
import Luxury from './Components/LuxurySection/Luxury';
import Footer from "./Components/Footer";
import FooterBottom from './Components/FooterBottom';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <FindSection/>
    <Drive/>
    <Luxury/>
    <Footer/>
    <FooterBottom/>
    
    </div>
  );
}

export default App;
