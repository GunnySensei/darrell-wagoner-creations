import {React, useState} from 'react';
import {MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem, MDBTextArea} from 'mdb-react-ui-kit';

function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartData')));

    const removeFromCart = (event) => {
        let cartArray = cartItems;
        cartArray.filter((item) => {
            if (item.id === event.target.id) {
                cartArray.splice(cartArray.indexOf(item), 1);
            }
            return cartArray;
        });
        localStorage.setItem("cartData", JSON.stringify(cartArray));
        setCartItems(JSON.parse(localStorage.getItem('cartData')));
    }

    const handleFormSubmit = (event) => {
        let form = event.target.form;
        let itemObj = [];
        let formattedCartItems = cartItems.map((item) => itemObj.push({Name: item.title, Link: item.link}))
        console.log(formattedCartItems);

        console.log(itemObj);
        let emailObj = {
            "name": form[0].value,
            "email": form[1].value,
            "subject": "Darrell Wagoner Creations - " + form[2].value,
            "message": "Reference the following items \n" + JSON.stringify(itemObj) + "\n and a message from the customer \n" + form[3].value,
            "mailCopy": form[4].value
        }
        fetch(`/email/contact`,{
            mode: 'cors',
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },   
            body: JSON.stringify(emailObj)
        })
        window.alert("Thank you! Your Email has been Sent Successfully");
    }

    return (
        <>
            <div className='container border'>
                <div className='row col-12'>
                    <h2>Cart</h2>
                </div>
                <div className='col-12 col-md-12'>
                    {cartItems?.map((item) => {
                        return (
                            <div className='container col-12' id={item.id}>
                                <div className='row'>
                                    <img src={item.images[0].link} alt={item.description} className='col-md-3 img img-thumbnail' />
                                    <div className='row col-md-7'>
                                        <div className='row col-12 col-md-6'>
                                            <h3 className='col-3'>Name:</h3>
                                            <h4 className='col-9'>{item.title.split(" -")[0]}</h4>
                                        </div>
                                        <div className='row col-12 col-md-6'>
                                            <h3 className='col-3'>Price:</h3>
                                            <h4 className='col-7'>{item.tags}</h4>
                                            <button style={{height: "10%"}} className='btn btn-danger col-md-2' id={item.id} onClick={removeFromCart}>&#10006;</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {!cartItems &&
                        <>
                            <a href='/'>
                                <button className='btn btn-info'>No Items Yet, Return Home?</button>
                            </a>
                        </>
                    }
                </div>
                <div className='inquiryContainer'>
                    <MDBValidation noValidate id='form' className='text-center' style={{width: '100%', maxWidth: '3000px', outlineColor: 'black'}}>
                        <h3>If you would like to contact us about your above items or another project,</h3>
                        <h3>Please email us below with the information and we'll get back to you as soon as possible!</h3>

                        <MDBValidationItem invalid feedback='Please provide your name.'>
                            <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
                        </MDBValidationItem>

                        <MDBValidationItem invalid feedback='Please provide your email.'>
                            <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
                        </MDBValidationItem>

                        <MDBValidationItem invalid feedback='Please provide mail subject.'>
                            <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
                        </MDBValidationItem>

                        <MDBValidationItem invalid feedback='Please provide a message text.'>
                            <MDBTextArea wrapperClass='mb-4' label='Message' required />
                        </MDBValidationItem>

                        <MDBValidationItem feedback=''>
                            <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me a copy' />
                        </MDBValidationItem>

                        <MDBBtn type='submit' onClick={handleFormSubmit} color='primary' block className='my-4'>
                            Send
                        </MDBBtn>
                    </MDBValidation>
                </div>
            </div>
        </>
    )
}

export default Cart;