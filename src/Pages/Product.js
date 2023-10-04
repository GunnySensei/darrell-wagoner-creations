import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import Thumbnail from '../Components/Thumbnail';
let productList = require('../Assets/photoData.json');

function Product() {
    const { productName } = useParams();
    let product = productList.data.find(x => x.id.includes(productName.split(".")[0]));
    let productTitle = product.title.split(" -")[0];
    let productFamily = productList.data.filter(y => y.title.includes(productList.data.find(x => x.id.includes(productName.split(".")[0])).title.split("-")[0]));
    
    const [focusImage, setFocusImage] = useState(product.link);
    const [addedState, setAddedState] = useState("Add to Cart")

    const imageFocusChange = (event) => {
        setFocusImage(event.target.src);
    }

    const addToCart = () => {
        setAddedState("Added to Cart!");
        let productObj = [product];
        
        let currentCart = localStorage.getItem('cartData');
        currentCart = JSON.parse(currentCart);
        
        if(currentCart !== null) {
            currentCart.push(productObj[0]);
        } else {
            currentCart = productObj;
        }
        
        currentCart = JSON.stringify(currentCart);
        localStorage.setItem("cartData", currentCart);
        window.dispatchEvent(new Event("storage"));
    }

    return (
        <>
        <div className='container'>
            <div className='row col-12'>
            <h2>{productTitle}</h2>
            </div>
            <div className='row col-12'>
                <img className="img img-thumbnail productSingle col-8" src={focusImage} alt={productName}/>
                <div className='col-4'>
                    {productFamily.map(product => 
                        // eslint-disable-next-line
                        <a onClick={imageFocusChange}>
                        <Thumbnail productObject={product}  />
                        </a>
                    )}
                </div>
                <div className='row col-12'>
                    <h2 className='col-8'>Product Story</h2>
                    <button className='btn btn-primary col-3 col-lg-2 offset-1 offset-lg-2' onClick={addToCart}>{addedState}</button>
                    <p className='col-8'>{product.description != null ? product.description : "This Product is still in development."}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;