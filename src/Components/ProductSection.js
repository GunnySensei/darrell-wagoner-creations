
function ProductSection() {
    let productList = [];
    let productListIndex = 0;
    let imageList =[
        "https://imgur.com/w99k64t",
        "https://imgur.com/QHIAh02",
        "https://imgur.com/oROTwnB",
        "https://imgur.com/gSOTNkd",
        "https://imgur.com/rghCokJ",
        "https://imgur.com/BzdqdTX",
        "https://imgur.com/0DW860U",
        "https://imgur.com/MiQZdHC",
        "https://imgur.com/3BtCfo4",
        "https://imgur.com/QObTIBU",
        "https://imgur.com/MZG72I0",
        "https://imgur.com/BCILp6s",
        "https://imgur.com/7El1Zqi",
        "https://imgur.com/OoUBCwz",
        "https://imgur.com/uq0Y1ze",
        "https://imgur.com/mXDou6q",
        "https://imgur.com/2ttSij0",
        "https://imgur.com/a8QH1ma",
        "https://imgur.com/EEJyJyA",
        "https://imgur.com/VO1iYMY",
        "https://imgur.com/2P9RVle",
        "https://imgur.com/6NUzbxP",
        "https://imgur.com/7UoGX9r",
        "https://imgur.com/1WVhgCr",
        "https://imgur.com/dv4NLzl"
    ];

    const productListGenerator = (imageList) => {
        imageList.forEach(image => {
            let imageObject = {};
            imageObject.index = productListIndex;
            imageObject.image = image + ".jpg";
            productList.push(imageObject);
            productListIndex++;
        })
    }

    productListGenerator(imageList);

    return (
        <div className="productSection row flex-grow-1">
            {productList.forEach(product => {
                return product.index % 2 !== 0 ?
                <>
                <li className="list-group-item image col-6 h-50" key={product.index}>
                    <img src={product.image}  alt="wood made furniture" className="img img-thumbnail full-width" key={product.index}/>
                    <div></div>
                    <h2>{product.index}</h2>
                </li>
                <div className="w-100 d-none d-md-block"></div>
                </>
                : 
                <>  
                <li className="list-group-item image col-6 h-25" key={product.index}>
                    <img src={product.image} alt="furniture crafted in wood" className="img img-thumbnail full-width" key={product.index}/>
                    <div></div>
                    <h2>{product.index}</h2>
                </li>
                </>
        })}
        </div>
    );
  }
  
  export default ProductSection;
  