import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () =>{
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {
                        // according to passed number, loop that much time and show start that much time.
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p><StarIcon /></p>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} alt="" />  
            <button onClick={addToBasket}>Add to basket</button>          
        </div>
    )
}

export default Product
