import { Stars } from "./Stars";
import { useContext } from "react";
import { Context } from "../Context/Context";

export function ProductItem({id, img, title, price, rating}) {
    const deletePhone = useContext(Context);

    return (
        <div onDoubleClick={() => deletePhone(id)} className="productItem">
            <img src={img} alt="#"/>
            <h2>{title}</h2>
            <p>{price} $</p>
            <Stars rating={rating} />
        </div>
    )
}