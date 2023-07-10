import { useState } from 'react';
import Home from './components/Home';
import Work from './components/Work';
import TimeLine from './components/TimeLine';
import Header,{HeaderPhone} from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <TimeLine />
      <Contact />
      <Footer />
    </>
  )
}

export default App
