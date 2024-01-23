import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import Thumbnail from '../Components/Thumbnail';

function Product() {
    const { productName } = useParams();
    const [addedState, setAddedState] = useState("Add to Cart")
    // eslint-disable-next-line
    const [productListState, setProductListState] = useState({});
    // eslint-disable-next-line
    const [gotProductList, setGotProductList] = useState(false);
    const [productState, setProductState] = useState({images:[""]});
    
    
    
    
    const [focusImage, setFocusImage] = useState('https://imgur.com/');
    
    const setState = async (json) => {
        await setProductListState(json);
    }



    const imageFocusChange = (event) => {
        setFocusImage(event.target.src);
    }

    const addToCart = () => {
        setAddedState("Added to Cart!");
        let productObj = [productState];
        
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

    function getData() {
        fetch(`/api`,{
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
      })
          .then(function(response){
            console.log(response);
            return response.json();
          })
          .then(function (myJson) {
            console.log(myJson);
            setState(myJson);
            setProductState(myJson.data.find(x => x.id.includes(productName)));
            return myJson;
        }).then(function(myJson){
            let currentProduct = myJson.data.find(x => x.id.includes(productName))
            setFocusImage(currentProduct.images ? currentProduct.images[0].link : null);
        }
            );
        }
        if(!gotProductList) {
            getData();
        setGotProductList(true);
      };

    return (
        <>
        <div className='container'>
            <div className='row col-12'>
            <h2>{productState.title ? productState.title : `Product Name`}</h2>
            </div>
            <div className='row col-12'>
                <img className="img img-thumbnail productSingle col-8" src={focusImage} alt={productName}/>
                <div className='col-4'>
                    {productState.images ? productState.images.map(product => 
                        // eslint-disable-next-line
                        <a onClick={imageFocusChange}>
                        <Thumbnail productObject={product}  />
                        </a>
                    ) : []}
                </div>
                <div className='row col-12'>
                    <h2 className='col-8'>Product Story</h2>
                    <button className='btn btn-primary col-3 col-lg-2 offset-1 offset-lg-2' onClick={addToCart}>{addedState} - {productState?.images[0].description ? productState?.images[0].description.split('- ')[1] : ""}</button>
                    <p className='col-8'>{productState?.images[0].description ? productState?.images[0].description : "This Product is still in development."}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;