import {React, useState} from 'react';


function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartData')));

    const removeFromCart = (event) => {
        let cartArray = cartItems;
        cartArray.filter((item) => {
           if(item.id === event.target.id) {
            cartArray.splice(cartArray.indexOf(item),1);
           }
           return cartArray;
        });
        localStorage.setItem("cartData", JSON.stringify(cartArray));
        setCartItems(JSON.parse(localStorage.getItem('cartData')));
    }

    return (
        <>
        <div className='container border'>
            <div className='row col-12'>
                <h2>Cart</h2>
            </div>
            <div className='col-12 col-md-12'>
                {cartItems.map((item) => {
                    return (
                        <div className='container col-12' id={item.id}>
                            <div className='row'>
                                <img src={item.link} alt={item.description} className='col-md-3 img img-thumbnail' />
                                <div className='row col-md-7'>
                                    <div className='row col-12 col-md-6'>
                                        <h3 className='col-3'>Name:</h3>
                                        <h4 className='col-9'>{item.title.split(" -")[0]}</h4>
                                    </div>
                                    <div className='row col-12 col-md-6'>
                                        <h3 className='col-3'>Price:</h3>
                                        <h4 className='col-7'>{item.tags}</h4>
                                        <button style={{height: "10%"}} className='btn btn-danger col-md-2'  id={item.id} onClick={removeFromCart}>&#10006;</button>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Cart;