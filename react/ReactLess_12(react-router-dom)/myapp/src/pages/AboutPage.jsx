import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function AboutPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    return (
        <div className="content">
            <ul>
                {products.map(elem =>
                    // Link это как тег a, только он не перезагружает страницу
                    <Link key={elem.id} to={'/product/' + elem.id}>
                        <li>{elem.title}</li>
                    </Link>
                )}
            </ul>
        </div>
    )
}