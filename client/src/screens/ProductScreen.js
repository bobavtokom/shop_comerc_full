import "./ProductScreen.css";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getProductDetails} from "../redux/actions/productActions";
import {addToCart} from "../redux/actions/cartActions";

export const ProductScreen = ({match, history}) => {

   const [qty, setQty] = useState(1);
   const dispatch = useDispatch();

   const productDetails=useSelector(state=>state.getProductDetails);
   const {loading, error, product}= productDetails;

   useEffect(() => {
      if(product && match.params.id !== product._id){
         dispatch(getProductDetails(match.params.id))
      }
   }, [dispatch, product, match]);

  const addToCartHandler=()=>{
      dispatch(addToCart(product._id,qty));
      history.push("/cart");
   }
    return (
        <div className='productscreen'>
           {loading? (<h2>Loading...</h2>) : error? (<h2>{error}</h2>) : (
              <>
<div className="productscreen__left">
               <div className='image__left'>
            <img src={product.imageUrl} />
               </div>
               <div className='info__left'>
                 <p className='left__name'>{product.name}</p>
                 <p> ${product.price}</p>
                 <p>{product.description}</p>
               </div>
            </div>
            <div className="productscreen__right">
               <div className="info__right">
                 <p>Price: <span>${product.price}</span></p>
                 <p>Status: <span>{product.stockCount > 0 ? "In Stock" : "Out of Stock"}</span></p>
                 <p>Quantity:
                    <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                      {[...Array(product.stockCount).keys()].map((x)=>(
                         <option key={x+1} value={x+1}>{x+1}</option>
                      )
                      )}
                    </select>
                 </p>
                 <p>
                    <button type='button'onClick={addToCartHandler}>Add to cart</button>
                 </p>
               </div>
            </div>
              </>
           )}
            
        </div>
    )
}
export default ProductScreen;
