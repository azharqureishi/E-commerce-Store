import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
// setting badge
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logout } from '../redux/userRedux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

const Navbar = () => {
    let data;
    const quantity = useSelector(state => state.cart.quantity)
    const userdata = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch();
    const handleClick = () =>{
       dispatch(logout())
       console.log('button clicked')
    }
    
   
    return ( <div className="header">
        <div className="header__wrapper">
        <div className="header__wrapper__left">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input type="text" placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="header__wrapper__center">
          <Link to='/' className="logo" onClick={goToTop}>Logo.</Link>
        </div>
        <div className="header__wrapper__right">
          <ul className="menu-list">
            { userdata !== null
             ? (
               <div className='randomDev'>
              <li 
              className="menuItem">{userdata.user.username}
              </li>
              <button onClick={handleClick}>LOGOUT</button>
              </div>
             )
             : (
            <div>
              <Link className="menuItem" to="/register">REGISTER</Link>
              <Link className="menuItem" to="/login">SIGN IN</Link>
            </div>
            )}
          <li className="menuItem badge" aria-label="cart">
           <Link to="/cart">
           
          <IconButton aria-label="cart">
      <StyledBadge badgeContent={quantity} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
           </Link>

          </li>
          </ul>
        </div>
      </div>
    </div> );
}
 
export default Navbar;