import React, {useState} from "react";
let productList = require('./photoData.json');

function ProductSection() {
    let productListIndex = 0;
    let formatProductList = [];

    const [productListState, setProductListState] = useState([]);

    const getData=()=>{
        // fetch('https://api.imgur.com/3/album/RBee9LZ/images',
        fetch('data/photoData.json',
        {
          headers : { 
            // 'Authorization': 'Client-ID 5c7c9cd823f9da7'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            productList = myJson;
            productListGenerator(productList);
          });
      }

      
      // TODO Check on how best to operate this with data
      const productListGenerator = (imageList) => {
          imageList.data.forEach(image => {
              let imageObject = {};
              imageObject.index = productListIndex;
              imageObject.image = image.link;
              imageObject.url = image.link.split("m/")[1];
              imageObject.name = image.title.split("-")[0];
              // eslint-disable-next-line
              if(image.title.split("-")[1] == 1) {
                  formatProductList.push(imageObject);
                }
                setProductListState(formatProductList);
                productListIndex++;
            })
        }
        getData();
        // productListGenerator(productList);


    return (
        <div className="productSection row flex-grow-1">
            {productListState.map(product => {
                return( 
                <>
                <a href={"/product/" + product.url} className="list-group-item image col-6 h-50" key={product.index}>
                    <img src={product.image}  alt="wood made furniture" className="img img-thumbnail full-width" key={product.index}/>
                    <div></div>
                    <p>{product.name}</p>
                </a>
                </>
        )})}
        </div>
    );
  }
  
  export default ProductSection;
  