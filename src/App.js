import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Homepage from './pages/homepage';
import Check from './pages/check';
import navbar from './pages/navbar';
import SeeMore from "./pages/seemorepage1";
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import ProductAdminPanel from './pages/AddProductForm';
import AddProductForm from './pages/AddProductForm';
import SeeMoreLaptop from './pages/SeeMoreLaptop';
import AdminNavbar from './pages/AdminNavbar';
// import Navbar1 from './com/navbar';
// C:\Users\hp\Desktop\webapiassigmrnt\frontend-31a-Nishan324\src\App.js
 
function App(){
  return(
<Router>
  <navbar/>
<ToastContainer/>

  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/seemore' element={<SeeMore/>}/>
    <Route path='/check' element={<Check/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/profile' element={<UserProfile/>}/>
    <Route path='/admin' element={<AdminDashboard/>}/>
    <Route path='/pro' element={<AddProductForm/>}/>
    <Route path='/laptop' element={<SeeMoreLaptop/>}/>
    <Route path='/ad' element={<AdminNavbar/>}/>

    
  </Routes>
</Router>
  );
}
 
export default App