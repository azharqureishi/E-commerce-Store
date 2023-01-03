import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { removeProduct } from '../redux/cartRedux';
import { userRequest } from '../requestMethods';
import CloseIcon from '@mui/icons-material/Close';
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    let user = null;
    user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
    const [stripeToken, setStripeToken] = useState(null)
   
    const deleteHandler = (product) =>{
          dispatch(removeProduct(product))
          }
    const onToken = token =>{
         setStripeToken(token)
         }
   
    useEffect(() =>{
      const makeRequest = async () => {
        try{
          const res = await userRequest.post("checkout/payment",{
            tokenId: stripeToken.id,
            amount: cart.total * 100,
           });
          navigate("/success", {
            state: {
            stripeData: res.data,
            product: cart
          }
          });
  
        }catch{}
      }
      stripeToken && makeRequest();
    },[stripeToken,cart.total,navigate])
    return ( <div className="cart">

          <Navbar/>
        {/* <---Wrapper---> */}
        <div className="cart__wrapper">
        {/* <---Wrapper Title---> */}
        <div className="cart__wrapper__title">YOUR BAG</div >

        {/* <---Wrapper Top Section---> */}
        <div className="cart__wrapper__top">
        <Link to="../">
          <button className="cart__wrapper__top__button">CONTINUE SHOPPING</button>
          </Link>
          
          <div className="cart__wrapper__top__textContainer">
            <h1 className="cart__wrapper__top__textContainer__text">Shopping Bag (2)</h1>
            <h1 className="cart__wrapper__top__textContainer__text">Your Wishlist (2)</h1>
          </div>
          <button className="cart__wrapper__top__button" type="filled">CHECKOUT NOW</button>
        </div>

         {/* <---Wrapper Bottom---> */}
        <div className="cart__wrapper__bottom">

           {/* <---Wrapper Bottom info---> */}
               
             <div className="cart__wrapper__bottom__info">
           {cart.products.map(product => (
             <div className="cart__wrapper__bottom__info__product" key={product._id}>
               <div className="cart__wrapper__bottom__info__product__detailsContainer">
                 
                 <img
                 alt=""
                 className="cart__wrapper__bottom__info__product__detailsContainer__image"
                 src={product.img}/>
                 <div className="cart__wrapper__bottom__info__product__detailsContainer__details">
                   <h1 className="cart__wrapper__bottom__info__product__detailsContainer__details__name">
                     <b>Product:</b> {product.title}
                   </h1>
                   <span className="cart__wrapper__bottom__info__product__detailsContainer__details__id">
                     <b>ID:</b> {product._id}
                   </span>
                   <div className="cart__wrapper__bottom__info__product__detailsContainer__details__color" style={{background: `${product.color}`}} />
                   <span className="cart__wrapper__bottom__info__product__detailsContainer__details__size">
                     <b>Size:</b> {product.size}
                   </span>
                 </div>
               </div>
               <div className="cart__wrapper__bottom__info__product__priceDetails">
                <div className="cart__wrapper__bottom__info__product__priceDetails__container">
                   <span className="cart__wrapper__bottom__info__product__priceDetails__container__amount">{product.quantity}</span>
                    
                <div className="cart__wrapper__bottom__info__product__priceDetails__container__price">${product.price * product.quantity}</div>
                 </div>
                <CloseIcon 
                    className="cart__wrapper__bottom__info__product__priceDetails__delete" 
                    onClick={e => deleteHandler(product)}/>
               </div>
             </div>
              ))}
              
            <hr />
           </div>

           {/* <---Wrapper Bottom summary---> */}
          <div className="cart__wrapper__bottom__summary">
            <h1 className="cart__wrapper__bottom__summary__title">ORDER SUMMARY</h1>
            <div className="cart__wrapper__bottom__summary__item">
              <span className="cart__wrapper__bottom__summary__item__text">Subtotal</span>
              <span className="cart__wrapper__bottom__summary__item__price">$ {cart.total}</span>
            </div>
            <div className="cart__wrapper__bottom__summary__item">
              <span className="cart__wrapper__bottom__summary__item__text">Estimated Shipping</span>
              <span className="cart__wrapper__bottom__summary__item__price">$ 5.90</span>
            </div>
            <div className="cart__wrapper__bottom__summary__item">
            <span className="cart__wrapper__bottom__summary__item__text">Shipping Discount</span>
              <span className="cart__wrapper__bottom__summary__item__price">$ -5.90</span>
            </div>
            <div className="cart__wrapper__bottom__summary__item" type="total">
              <span className="cart__wrapper__bottom__summary__item__text">Total</span>
              <span className="cart__wrapper__bottom__summary__item__price">$ {cart.total}</span>
            </div>
             { user == null 
             ? <div style={{padding:"0px 0px 10px 0px"}}>
              <button 
               style={{
                padding:"10px 20px",
                display:"block",
                marginBottom:"10px"
              }}
              type='button' 
              disabled>CHECKOUT NOW</button>
              <span style={
                {fontWeight:"bolder",
                 color:"red",
                 fontSize:"18px",
                 }}>Please Sign-In for checkout</span>
             </div>
             :
             <StripeCheckout
             name="Khitab khan"
             billingAddress
             shippingAddress
             description={`Your total is $${cart.total}`}
             amount={cart.total*100}
             token={onToken}
             stripeKey={KEY} >
         <button
          className="cart__wrapper__bottom__summary__button"
          style={{marginBottom:"10px"}}
          >CHECKOUT NOW</button>
           </StripeCheckout>
             }
            
          </div>
        </div>
    
      </div>
        {/* <---Footer--> */}
        <Footer/>
    </div> );
}
 
export default Cart;


