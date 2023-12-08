import { Routes,Route, useLocation } from 'react-router-dom'; 
import About from './components/pages/About';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer';
import Homepage from './components/pages/Homepage';
import Contact from './components/pages/Contact';
import Navigation from './components/Navigation';
import ForgotPassword from './components/Login/ForgotPassword';
import ResetPassword from './components/Login/ResetPassword';
import DonationForm from './components/Admin/DonationForm';
import FarmarDashboard from './components/Admin/FarmarDashboard';
import RabDashboard from './components/Admin/RabDashboard';
import DirectorDashboard from "./components/Admin/DirectorDashboard";
import './App.css';




function App() {

  const location = useLocation();
  const hideNavigationAndFooter = location.pathname === '/Dashboard' || location.pathname === '/Admdash' 
  || location.pathname === '/Login' || location.pathname === '/Signup' || location.pathname === '/DonationForm'
  || location.pathname === '/FarmarDashboard' || location.pathname === '/RabDashboard' || location.pathname === '/DirectorDashboard'  ;
 
  

  return (
    <div>
      
      {!hideNavigationAndFooter && <Navigation />}
      <Routes>
      <Route path ="home" element ={<Homepage/>}/>
      <Route path ="/" element ={<Homepage/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/Signup" element ={<Signup/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path ="/Footer" element ={<Footer/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
      <Route path="/DonationForm" element ={<DonationForm/>} />
      <Route path ="/FarmarDashboard" element ={<FarmarDashboard/>}/>
      <Route path ="/RabDashboard" element ={<RabDashboard/>}/>
      <Route path ="/DirectorDashboard" element ={<DirectorDashboard/>}/>

      
      
      </Routes>
      {!hideNavigationAndFooter && <Footer />}
       
    </div>
  );
}

export default App;


