import { ProductItem } from "./ProductItem";

export function ProductList({phones}) {
    return (
        <div className="container">
            <div className="productList">
                {phones.map(e =>
                    <ProductItem
                        key={e.id}
                        id={e.id}
                        img={e.images[0]}
                        title={e.title}
                        price={e.price}
                        rating={e.rating}
                    />
                )}
            </div>
        </div>
    )
}