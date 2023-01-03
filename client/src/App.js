
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import Success from "./pages/Success";

const App = () => {
   const user = useSelector(state => state.user.currentUser);
    return ( <div>
      
       <BrowserRouter>
      <Routes>
         <Route  path='/' element={<Home/>}/>
         <Route  path='/products/:category' element={<ProductList/>}/>
         <Route path='product/:id' element={<Product/>} />
         <Route path='/cart' element={<Cart/>} />
       
       <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>} />
       <Route path='/register' element={user ? <Navigate to="/"/> :<Register/>} />
       <Route path='/success' element={<Success/>} />

       
       
      </Routes>
      </BrowserRouter>
    </div> );
}
 
export default App;