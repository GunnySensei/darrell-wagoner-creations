import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import Thumbnail from '../Components/thumbnail';
let productList = require('../Assets/photoData.json');


function Product() {
    const { productName } = useParams();
    let product = productList.data.find(x => x.id.includes(productName.split(".")[0]));
    let productTitle = product.title.split(" -")[0];
    let productFamily = productList.data.filter(y => y.title.includes(productList.data.find(x => x.id.includes(productName.split(".")[0])).title.split("-")[0]));
    
    const [focusImage, setFocusImage] = useState(product.link);

    const imageFocusChange = (event) => {
        console.log("event = ", event);
        setFocusImage(event.target.src);
    }

    console.log(productFamily);

    const addToCart = () => {
        window.alert("This feature is not currently complete, please try later or contact the developer.")
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
                        <a onClick={imageFocusChange}>
                        <Thumbnail productObject={product}  />
                        </a>
                    )}
                </div>
                <div className='row col-12'>
                    <h2 className='col-8'>Product Story</h2>
                    <button className='btn btn-primary col-3 col-lg-2 offset-1 offset-lg-2' onClick={addToCart}>Add to Cart</button>
                    <p className='col-8'>{product.description != null ? product.description : "This Product is still in development."}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;