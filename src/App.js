import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import AboutUs from './pages/AboutUs';
import AddProductForm from './pages/AddProductForm';
import AdminDashboard from './pages/AdminDashboard';
import AdminNavbar from './pages/AdminNavbar';
import CartPage from './pages/CartPage';
import ContactUs from './pages/ContactUs';
import SeeMoreLaptop from './pages/SeeMoreLaptop';
import UserProfile from './pages/UserProfile';
import WishlistPage from './pages/WishListPage';
import Check from './pages/check';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import SeeMore from "./pages/seemorepage1";
import AdminRoutes from './protected/AdminRoutes';
import UserRoutes from './protected/UserRoutes';
import AdminProductList from './pages/AdminProductList';
import AdminEditProduct from './pages/AdminEditProduct';
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


    


      
  
    <Route element={<UserRoutes/>}>
    <Route path='/homepage' element={<Homepage/>}/>
      <Route path='/seemore' element={<SeeMore/>}/>
      <Route path='/check' element={<Check/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/laptop' element={<SeeMoreLaptop/>}/>  
      <Route path='/wishlist' element={<WishlistPage/>}/>  

    </Route>

    <Route element={<AdminRoutes/>}>
    <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/pro' element={<AddProductForm/>}/>
      <Route path='/ad' element={<AdminNavbar/>}/>
      <Route path='/productList' element={<AdminProductList/>}/>
      <Route path="/editProduct/:id" element={<AdminEditProduct/>} />
    </Route>
  </Routes>

</Router>
  );
}
 
export default App