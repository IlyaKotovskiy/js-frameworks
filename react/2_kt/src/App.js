import './style.global.css'
import { useState } from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { AddProduct } from "./components/AddProduct/AddProduct";

export function App(){
    const data = [
        {id: 1, name: 'Велосипед', price: 1000, count: 1},
        {id: 2, name: 'Самокат', price: 700, count: 1},
        {id: 3, name: 'Ролики', price: 1300, count: 2},
        {id: 4, name: 'Сноуборд', price: 19000, count: 4}
    ]

    const [products, setProducts] = useState(data);

    const increment = productId => {
        const updatedProducts = products.map((elem) => {
            if (elem.id === productId && elem.count < 25) {
                return { ...elem, count: elem.count + 1 };
            }

            return elem;
        });

        setProducts(updatedProducts);
    }
    const decrement = productId => {
        const updatedProducts = products.map(elem => {
            if (elem.id === productId && elem.count > 0){
                return { ...elem, count: elem.count - 1 }
            }

            return elem;
        });

        setProducts(updatedProducts);
    }
    const deleteProduct = productId => {
        const removedProducts = products.filter(elem => elem.id !== productId);

        setProducts(removedProducts);
    }
    const addProduct = product => {
        const newProduct = {
            id: Date.now(),
            name: product[0],
            price: product[1],
            count: 1
        };

        setProducts([newProduct, ...products]);
    };

    return(
        <div className='container'>
            <AddProduct addProduct={addProduct} />
            <ProductList
                products={products}
                increment={increment}
                decrement={decrement}
                deleteProduct={deleteProduct} />
        </div>
    )
}