import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( <div className="footer">
         {/* left side  */}
        <div className="footer__left">
            <h1 className="footer__left__logo">Logo.</h1>
             <p className="footer__left__desc">
                There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
             </p>
         <ul className="footer__left__socialContainer">
            <li className="footer__left__socialContainer__socialIcon" style={{backgroundColor:"#3B5999"}}>
                <FacebookIcon/>
            </li>
            <li className="footer__left__socialContainer__socialIcon" style={{backgroundColor:"#55ACEE"}}>
                <TwitterIcon/>
            </li>
            <li className="footer__left__socialContainer__socialIcon" style={{backgroundColor:"#E4405F"}}>
                <InstagramIcon/>
            </li>
        
         </ul>
        </div>
         {/* center  */}
        <div className="footer__center">
            <h3 className="footer__center__title">
                Useful Links
            </h3>
            <ul className="footer__center__listContainer">
                <Link to="/" className="footer__center__listContainer__listItem">Home</Link>
                <Link to="/cart" className="footer__center__listContainer__listItem">Cart</Link>
                <Link to="/products/man" className="footer__center__listContainer__listItem">Man Fashion</Link>
                <Link to="/products/women" className="footer__center__listContainer__listItem">Women</Link>
                <Link to="" className="footer__center__listContainer__listItem">Accessories</Link>
                <Link className="footer__center__listContainer__listItem">My Account</Link>
                <Link className="footer__center__listContainer__listItem">Order Tracking</Link>
                <Link className="footer__center__listContainer__listItem">Wishlist</Link>
                <Link className="footer__center__listContainer__listItem">Terms</Link>
            </ul>
        </div>
         {/* right side */}
        <div className="footer__right">
            <h1 className="footer__right__title">
               Contact
            </h1>
            <ul className="footer__right__contactContainer">
            <li className="footer__right__contactContainer__contactItem">
                <RoomIcon/><span>Address: Gomal University DIKhan</span></li>
            <li className="footer__right__contactContainer__contactItem">
                <PhoneIcon/><span>Phone: +92 3XX XXXXXXX</span></li>
            <li className="footer__right__contactContainer__contactItem">
                <EmailIcon/><span>Email: gomaluni@gmail.com</span></li>
            </ul>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className="footer__right__payment" />



        </div>
    </div> );
}
 
export default Footer;