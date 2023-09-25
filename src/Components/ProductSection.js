let productList = require('../Assets/productData.json');

function ProductSection() {
    let productListIndex = 0;
    let formatProductList = [];


    // TODO Check on how best to operate this with data
    const productListGenerator = (imageList) => {
        imageList.forEach(image => {
            let imageObject = {};
            imageObject.index = productListIndex;
            imageObject.image = image.url + ".jpg";
            imageObject.name = image.url.split("m/")[1];
            formatProductList.push(imageObject);
            productListIndex++;
        })
    }

    productListGenerator(productList);

    return (
        <div className="productSection row flex-grow-1">
            {formatProductList.map(product => {
                return product.index % 2 !== 0 ?
                <>
                <a href={"/product/" + product.name} className="list-group-item image col-6 h-50" key={product.index}>
                    <img src={product.image}  alt="wood made furniture" className="img img-thumbnail full-width" key={product.index}/>
                    <div></div>
                    <h2>{product.name}</h2>
                </a>
                <div className="w-100 d-none d-md-block"></div>
                </>
                : 
                <> 
                <a href={"/product/" + product.name} className="list-group-item image col-6 h-25" key={product.index}>
                    <img src={product.image} alt="furniture crafted in wood" className="img img-thumbnail full-width" key={product.index}/>
                    <div></div>
                    <h2>{product.name}</h2>
                </a>
                </>
        })}
        </div>
    );
  }
  
  export default ProductSection;
  