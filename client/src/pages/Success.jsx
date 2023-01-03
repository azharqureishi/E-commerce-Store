import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest} from "../requestMethods";
import { resetProduct } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import { border, borderColor, color, fontFamily } from "@mui/system";


const Success = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const data = location.state.stripeData;
  const cart = location.state.product;
 
  const resetHandler = () =>{
    dispatch(resetProduct())
    }
  const currentUser = useSelector((state) => state.user.currentUser);

  const userId = currentUser.user._id
  const product = cart.products;
  const [orderId, setOrderId] = useState(null);
  const buttonStyle = {
         padding: '10px',
         marginTop: '20px', 
        //  border: "2px solid white",
         border:"none",
         boxShadow: '0px 1px s2px black',
         backgroundColor:"#5bc0de"
  }

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await publicRequest.post("orders", {
          userId,
          products: product.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      
      } catch {}
    };
    data && createOrder();
    resetHandler();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontWeight:"bolder",
        fontFamily:"sans-serif"
      }}
    >
      <h1 style={{fontSize: 120,color:"#5bc0de"}}>Success</h1>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={buttonStyle}><Link to="/" style={{textDecoration:"none",color:"white" ,fontWeight:"bolder"}}>Go to Homepage</Link></button>
    </div>
  );
};

export default Success;