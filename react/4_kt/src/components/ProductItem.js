import { Stars } from "./Stars";

export function ProductItem({img, title, price, rating}) {
    return (
        <div className="productItem">
            <img src={img} alt="#"/>
            <h2>{title}</h2>
            <p>{price} $</p>
            <Stars rating={rating} />
        </div>
    )
}