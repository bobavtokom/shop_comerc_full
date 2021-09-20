import "./HomeScreen.css";
import {Product} from "../components/Product";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"; 

import {getProducts as listProducts} from "../redux/actions/productActions";

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts=useSelector(state => state.getProducts);
    const {loading, products, error}=getProducts;

    useEffect(()=>{
       dispatch(listProducts())
    }, [dispatch])
    return (
        <div className='homescreen'>
            <h1 className='homescreen__title'>Latest products</h1>
            <div className='homescreen__products'>
               {loading? (<h2>Loading...</h2>) : error? (<h2>{error}</h2>) :
               (products.map((product)=><Product key={product._id}
                productId={product._id} 
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                description={product.description} />))}
            </div>
        </div>
    )
}
export default HomeScreen;
