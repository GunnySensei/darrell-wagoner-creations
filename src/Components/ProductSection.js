
function ProductSection() {
    let productList =[
        {id: 1, name: "one"},
        {id: 2, name: "two"},
        {id: 3, name: "three"},
        {id: 4, name: "four"}
    ];

    return (
        <div className="section1">
            {productList.map(product => (
                <li className="list-group-item" key={product.id}>
                    {product.name}
                </li>
            ))}
        </div>
    );
  }
  
  export default ProductSection;
  