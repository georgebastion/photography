import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import About from './components/About/About';
import Booking from './components/Booking.js/Booking';
import Branding from './components/Branding/Branding';
import Home from './components/Home/Home';
import Photography from './components/Photography/Photography';
import Contact from './components/Contact/Contact';

function App() {
  const location=useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/branding' element={<Branding/>} />
        <Route path='/photography' element={<Photography/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
