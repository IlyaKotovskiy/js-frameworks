import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../components/ProductItem";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!products.length) {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json));

      console.log('Запрос')
    } else {
      console.log('В масиве есть данные')
      return
    }
  }, [products]);

  console.log(products)

  return (
    <div className="container">
      <div className="productList">
        {products.map(e =>
          <Link key={e.id} to={'product/' + e.id} state={e} >
            <ProductItem
              img={e.image}
              title={e.title}
              price={e.price}
              rating={e.rating}
            />
          </Link>
        )}
      </div>
    </div>
  )
}