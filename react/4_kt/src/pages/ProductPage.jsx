import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";
// import { Stars } from "../components/Stars";

export function ProductPage() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    } else {
      fetch('https://fakestoreapi.com/products/' + id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id, location.state]);

  console.log(product)

  return (
    <div className="productInfo">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p className="price">Price: {formatter.format(product.price)}</p>
      <p className="text">{product.description}</p>
      {/* <Stars rating={product.rating} /> */}
      <Button title={'Back'} onClick={() => navigate(-1)} />
    </div>
  )
}