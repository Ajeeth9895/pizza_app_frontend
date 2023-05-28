import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../src/components/Login";
import AdminLogin from './admin/AdminLogin';
import AdminSignUp from './admin/AdminSignUp'
import AdminHome from './admin/AdminHome';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import Menu from './components/Menu';
import AddToCart from './products/AddToCart';
import SuccessOrder from './products/SuccessOrder';
import OrderedItems from './products/OrderedItems';
import AllOrders from './admin/AllOrders';
import AddProducts from './admin/AddProducts';
import AllProducts from './admin/AllProducts';
import OrderStatus from './admin/OrderStatus';


// export const url = 'https://pizza-app-dlzv.onrender.com'
export const url = 'http://localhost:8000'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/adminSignUp' element={<AdminSignUp />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/success' element={<SuccessOrder />} />
        <Route path='/orders' element={<OrderedItems />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        <Route path='/logout' element={<Home />} />
        <Route path='/adminHome' element={<AdminHome />}>
             <Route path='all-orders' element={<AllOrders/>} />
             <Route path='add-products' element={<AddProducts/>} />
             <Route path='edit-products/:id' element={<AddProducts/>} />
             <Route path='all-products' element={<AllProducts/>} />
             <Route path='order-status' element={<OrderStatus/>} />
        </Route>

        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
