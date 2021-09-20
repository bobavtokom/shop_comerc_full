import "./Product.css";
import {Link} from "react-router-dom";

export const Product = ({name, description, imageUrl, price, productId}) => {
    return (
        <div className="product">
            <img src={imageUrl}
 alt="product"/>
             <div className='product__info'>
                <p className='info__name'>{name}</p>
                <p className='info__desc'>
                {description.substring(0, 100)}...
                </p>
                <p className='info__price'>${price}</p>
                <Link to={`/product/${productId}`} className='info__button'>View</Link>
             </div>
        </div>
    )
}
