import styles from './productList.module.css';
import { ProductItem } from "./ProductItem/ProductItem";

export function ProductList({ products, increment, decrement, deleteProduct }){
    return(
        <div className={styles.list}>
            { products.map(e => <ProductItem
                key={e.id}
                id={e.id}
                name={e.name}
                price={e.price}
                count={e.count}
                increment={increment}
                decrement={decrement}
                deleteProduct={deleteProduct}
            />) }
        </div>
    )
}