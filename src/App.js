import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';


import About from './components/About/About';
import Booking from './components/Booking.js/Booking';
import Branding from './components/Branding/Branding';
import Home from './components/Home/Home';
import Photography from './components/Photography/Photography';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';
import Admin from './components/admin/Admin';

function App() {
  const location=useLocation();


  return (
    <div className="App">

        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Main/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/branding' element={<Branding/>} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/admin' element={<Admin/>} />

        </Routes>

    </div>
  );
}

export default App;
