import React, {useState} from "react";

function ProductSection() {
    let productListIndex = 0;
    let formatProductList = [];

    const [productListState, setProductListState] = useState([]);

    const [gotProductList, setGotProductList] = useState(false);

    function getData() {
        fetch(`http://localhost:${process.env.PORT}/api`,{
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
      })
          .then(function(response){
            console.log(response);
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            productListGenerator(myJson);
          });
      }

      
      // TODO Check on how best to operate this with data
      const productListGenerator = (imageList) => {
          imageList.data.forEach(image => {
              let imageObject = {};
              imageObject.index = productListIndex;
              imageObject.image = image.images[0].link;
              imageObject.url = image.link.split("a/")[1];
              imageObject.name = image.title;
              // eslint-disable-next-line
              formatProductList.push(imageObject);
                setProductListState(formatProductList);
                productListIndex++;
            })
        }
        if(!gotProductList) {
          getData();
          setGotProductList(true);
        }


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
  