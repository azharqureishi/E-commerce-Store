import { useState,useEffect } from 'react';
import {popularProducts} from '../data'
import ProductDetails from './ProductDetails';
import axios from 'axios';

const Products = ({cat, filters, sort}) => {
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   useEffect(() =>{
       const getProduct = async () =>{
          try {
            const res = await axios.get(
                cat
                ? `http://localhost:5000/api/products?category=${cat}`
                : `http://localhost:5000/api/products`
                )
              setProducts(res.data)
              console.log(res.data)
          } catch (error) {
            
          }
    }
    getProduct();
   },[cat]);

   useEffect(() =>{
     cat && setFilteredProducts(
        products.filter(item => Object.entries(filters).every(([key, value]) =>
         item[key].includes(value)
        ))
     )
   },[cat,filters,products])

   useEffect(() =>{
     if(sort === "newest"){
        setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
            )
        } else if(sort === "asc"){
            setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.price - b.price)
                )
        } else {
            setFilteredProducts(prev => 
        [...prev].sort((a,b) => b.price - a.price)
                )
        }
   },[sort])
return ( <div className="home__products">
        { cat 
          ? filteredProducts.map(item => (<ProductDetails item={item} key={item._id}/>))
          : products
              .slice(0, 8)
              .map(item => (<ProductDetails item={item} key={item._id}/>))
        }
    </div> );
}
 
export default Products;