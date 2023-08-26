import { Route, Routes } from 'react-router-dom';
import './tailwind.css'
import './style.css'
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Service from './pages/Service'
import ServiceName from './pages/ServiceName';
import { SentimentDashboard } from './pages/SentimentDashboard';
import CleansingDashboard from './pages/CleansingDashboard';
import VulgarityDashboard from './pages/VulgarityDashboard';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' >
          <Route path={``} element={<Dashboard />} />
          <Route path={`sentiment-analysis`} element={<SentimentDashboard />} />
          <Route path={`platform-cleansing`} element={<CleansingDashboard />} />
          <Route path={`vulgarity-protection`} element={<VulgarityDashboard />} />

        </Route>

        <Route path='/profile' element={<Profile />} />
        <Route path='/service'>
          <Route path={``} element={<Service />} />
          <Route path={`:serviceName`} element={<ServiceName head={``} />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}


export default App;
