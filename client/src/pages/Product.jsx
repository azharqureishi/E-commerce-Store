import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useLocation } from "react-router-dom";
import {useEffect, useState} from 'react'
import {publicRequest} from '../requestMethods';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
       const location = useLocation();
       const id = location.pathname.split("/")[2];
       const [product, setProduct] = useState({});
       const [quantity, setQuantity] = useState(1)
       const [color, setColor] = useState("white")
       const [size, setSize] = useState("small")
       const dispatch = useDispatch();
      
       useEffect(() => {
          const getProduct = async () =>{
            try{
              const res = await publicRequest.get("products/find/"+id)
              setProduct(res.data)
            }catch(error){}
          }
          getProduct();
          },[id])

       const handleQuantity = type =>{
         if(type === "dec"){
            quantity>1 && setQuantity(quantity -1)
            // if(productQuantity <= 1){
            //   setProductQuantity(1)
            // }
            }
            else{
            setQuantity(quantity +1)
            }
       }
       const handleClick = () =>{
         dispatch(addProduct({...product,quantity, color, size}))
       }

    return ( <div className="productPage">
         <Navbar />
       {/* ******************** */}
      <div className="productPage__wrapper">
        <div className="productPage__wrapper__imgContainer">
          <img className="productPage__wrapper__imgContainer__img" src={product.img} alt="" />
        </div>
        <div className="productPage__wrapper__infoContainer">
          <h1 className="productPage__wrapper__infoContainer__title">{product.title}</h1>
          <p className="productPage__wrapper__infoContainer__desc">
           {product.desc}
          </p>
          <span className="productPage__wrapper__infoContainer__price">${product.price}</span>
          <div className="productPage__wrapper__infoContainer__filterContainer">
            <div className="productPage__wrapper__infoContainer__filterContainer__filter">
              <span className="productPage__wrapper__infoContainer__filterContainer__filter__filterTitle">Color</span>
                {product.color?.map(item => (
                  <option 
                    className="productPage__wrapper__infoContainer__filterContainer__filter__filterColor"
                    key={item}
                    style={{backgroundColor:`${item}`}}
                    onClick={() => setColor(item)}
                    />
                   ))}
            </div>
            <div className="productPage__wrapper__infoContainer__filterContainer__filter">
              <span className="productPage__wrapper__infoContainer__filterContainer__filter__filterTitle">Size</span>
              <select className="productPage__wrapper__infoContainer__filterContainer__filter__filterSize" onClick={(e) => setSize(e.target.value)}>
                  {product.size?.map(item => (
                    <option 
                    value={item}
                    className="productPage__wrapper__infoContainer__filterContainer__filter__filterSize__option"
                    key={item}
                    >{item}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="productPage__wrapper__infoContainer__addContainer">
            <div className="productPage__wrapper__infoContainer__addContainer__amountContainer">
              <RemoveIcon onClick={() => handleQuantity('dec')} />
              <span  className="productPage__wrapper__infoContainer__addContainer__amountContainer__amount">{quantity}</span>
              <AddIcon onClick={() => handleQuantity('inc')}/>
            </div>
            <button 
             className="productPage__wrapper__infoContainer__addContainer__button"
             onClick={handleClick}
             >ADD TO CART</button>
          </div>
        </div>
      </div>
      {/* ******************** */}
      <Footer />
    </div> );
}
 
export default Product;