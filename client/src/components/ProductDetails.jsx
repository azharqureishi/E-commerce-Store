import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const ProductDetails = ({item}) => {

    return ( <div className="home__product__details">
          <div className="circle" />
      <img src={item.img} className="home__product__details__image" />
      <div className="home__product__details__info">
        <div className="home__product__details__info__icon">
          <Link to={`../product/${item._id}`}>
          <SearchIcon/>
          </Link>
        </div>
      </div>
    </div> );
}
 
export default ProductDetails;