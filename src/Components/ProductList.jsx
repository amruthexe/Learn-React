import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];
  return (
    <div>
        <h1>Products</h1>
        {products.map((pro)=>(
            <ul key={pro.id}>
                <li>{pro.id}</li>
                <li>{pro.name}</li>
                <li>{pro.price}</li>
                
            </ul>
        ))}
    </div>
  )
}

export default ProductList