
import Navbar from "../components/Navbar";
import Products from "../components/Products"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = e => {
     const value = e.target.value;
     setFilters({
      ...filters,
      [e.target.name]: value
     })
    }
    

    return ( <div className="productList">
        <Navbar/>
        {/* *********************** */}
        <div className="productList__title">{cat}</div>
        <div className="productList__filterContainer">
              <div className="productList__filterContainer__filter">
                <div className="productList__filterContainer__filter__title">Filter Products:</div>
                <select name="color" onChange={handleFilters} className="productList__filterContainer__filter__select">
                 <option disabled >Color</option>
                 <option value="white">White</option>
                 <option value="black">Black</option>
                 <option value="red">Red</option>
                 <option value="blue">Blue</option>
                 <option value="yellow">Yellow</option>
                 <option value="green">Green</option>
                </select>
                <select name="size" onChange={handleFilters} className="productList__filterContainer__filter__select">
                 <option disabled>Size</option>
                 <option value="extraSmall">XS</option>
                 <option value="small">S</option>
                 <option value="medium">M</option>
                 <option value="large">L</option>
                 <option value="extraLarge">XL</option>
                </select>
                </div>
              <div className="productList__filterContainer__filter">
                <div className="productList__filterContainer__filter__title">Sort Products:</div>
                 <select name="" onChange={e => setSort(e.target.value)} className="productList__filterContainer__filter__select">
                 <option value="newest" >Newest</option>
                 <option value="asc">Price (asc)</option>
                 <option value="desc">Price (desc)</option>
                </select>
                </div>
        </div>
        {/* *********************** */}
         
        <Products cat={cat} filters={filters} sort={sort}/>
        <Footer/>
    </div> );
}
 
export default ProductList;