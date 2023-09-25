import {React} from 'react';
import { useParams } from 'react-router-dom';


function Product() {
    const { productName } = useParams();
    return (
        <>
        <div className='container'>
            <div className='row col-12'>
            <h2>{productName}</h2>
            </div>
            <div className='row col-12'>
                <img className="img img-thumbnail productSingle col-8" src={"https://imgur.com/" + productName + ".jpg"} alt={productName}/>
                <div className='col-4'>
                    <img className="img img-thumbnail productThumb col-8 offset-md-4" src={"https://imgur.com/" + productName + ".jpg"} alt={productName}/>
                    <div class="w-100"></div>
                    <img className="img img-thumbnail productThumb col-8 offset-md-4" src={"https://imgur.com/" + productName + ".jpg"} alt={productName}/>
                    <div class="w-100"></div>
                    <img className="img img-thumbnail productThumb col-8 offset-md-4" src={"https://imgur.com/" + productName + ".jpg"} alt={productName}/>
                </div>
                <div className='row col-12'>
                    <h2 className='col-8'>Product Story</h2>
                    <button className='btn btn-primary col-3 col-lg-2 offset-1 offset-lg-2'>Add to Cart</button>
                    <p className='col-8'>Nostrud ut dolore cupidatat incididunt fugiat amet sunt pariatur est eu magna. Voluptate elit enim laborum veniam ullamco dolore enim fugiat. Lorem aliqua aliqua esse cupidatat cillum ullamco officia dolor consectetur consectetur. Sunt voluptate qui laborum anim esse excepteur dolore consequat reprehenderit consequat.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;