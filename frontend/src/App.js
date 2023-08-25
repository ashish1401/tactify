import { Route, Routes } from 'react-router-dom';

import './tailwind.css'
import './style.css'
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about ' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
