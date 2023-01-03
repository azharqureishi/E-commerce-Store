import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector(state => state.user);
    
    const handleClick = e => {
        e.preventDefault();
        login(dispatch, {username, password})
    }
    return ( <div className="login">
        <div className="login__wrapper">
            <Link to="/"> <ReplyAllIcon className="backButton"/></Link>
            <h1 className="login__wrapper__title">SIGN IN</h1>
            <form action="" className="login__wrapper__form">
                <input
                 type="name" 
                 className="login__wrapper__form__input" 
                 placeholder="username"
                 required 
                 onChange={e => setUsername(e.target.value)}
                 />
                <input
                 type="password" 
                 className="login__wrapper__form__input" 
                 placeholder="password"
                 required
                 onChange={e => setPassword(e.target.value)} 
                 />
                <button
                 type="button" 
                 className="login__wrapper__form__button"
                 onClick={handleClick}
                 disabled={isFetching}
                 >LOGIN</button>
                 {error && <span>Something went wrong...</span>}
                <a href="#" className="login__wrapper__form__link">DO NOT YOU REMEMBER THE PASSWORD?</a>
                <Link to="../register" className="login__wrapper__form__link">CREATE A NEW ACCOUNT</Link>

            </form>
        </div>
    </div> );
}
 
export default Login;