import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function ProductInfoPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({images: []});

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  console.log(product)

  return (
    <div className="content">
      <div>
        <h2>{product.title}</h2>
        <img src={product.images[0]} />
        <p>Цена: {product.price}$</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}