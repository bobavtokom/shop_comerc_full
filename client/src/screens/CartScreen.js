import "./CartScreen.css";
import{useDispatch, useSelector} from "react-redux";
import{Link} from "react-router-dom";
import CartItem from "../components/CartItem" ;
import {addToCart, removeFromCart} from '../redux/actions/cartActions';
 
export const CartScreen = () => {
    const dispatch=useDispatch();
    const cart= useSelector((state)=>state.cart);
    const {cartItems}=cart;
    const qtyChangeHandler=(id, qty)=>{
        dispatch(addToCart(id, qty));
    };
    const removeHandler=(id)=>{
        dispatch(removeFromCart(id));
    }
    const cartCount=()=>{
        return cartItems.reduce((qty, item)=>Number(item.qty) + qty,0);
    };
    const cartSubtotal=()=>{
        return cartItems.reduce((price, item)=>(item.price * item.qty)+ price,0);
    }
    return (
        <div className='cartscreen'>
            
            <div className="cartscreen__left">
            <h2>Shopping cart</h2>
            {cartItems.length === 0 ?(
                <div>
                    Cart is empty <Link to='/'>go back</Link>
                </div>
            ):(
                cartItems.map((item)=>(
                <CartItem item={item} qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
                 />
            )
                ))
                
            
                
            }
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({cartCount()})</p>
                    <p>${cartSubtotal().toFixed(2)}</p>
                    
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}
export default CartScreen;
