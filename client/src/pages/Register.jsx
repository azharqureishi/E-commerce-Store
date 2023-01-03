import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import {Link} from 'react-router-dom'
const Register = () => {
    return ( <div className="register login">
         
      <div className="login__wrapper">
         <Link to="/"><ReplyAllIcon className="backButton"/></Link>
        <h1 className="login__wrapper__title">CREATE AN ACCOUNT</h1>
        <form action="" className="login__wrapper__form">
           <input type="text" className="login__wrapper__form__input" placeholder="name" />
           <input type="text" className="login__wrapper__form__input" placeholder="last name" />
           <input type="text" className="login__wrapper__form__input" placeholder="username" />
           <input type="email" className="login__wrapper__form__input" placeholder="email" />
           <input type="password" className="login__wrapper__form__input" placeholder="password" />
           <input type="password" className="login__wrapper__form__input" placeholder="confirm password" />
          
          <span className="login__wrapper__form__agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <strong style={{fontWeight:"bold"}}>PRIVACY POLICY</strong>
          </span>
          <button className="login__wrapper__form__button">CREATE</button>
        </form>
      </div>

    </div> );
}
 
export default Register;