import { Link } from "react-router-dom";
const CategoryItems = ({item}) => {
    return ( <div className="categoryItems">
        <Link to={`products/${item.cat}`}>
        <img src={item.img} className="categoryItems__image"/>
        <div className="categoryItems__info">
            <div className="categoryItems__info__title">{item.title}</div>
            <button className="categoryItems__info__button">SHOP NOW</button>
        </div>
        </Link>
    </div>);
}
 
export default CategoryItems;