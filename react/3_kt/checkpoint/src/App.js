import './style.scss';
import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

import { Context } from "./Context/Context";
import { Footer } from "./components/Footer";

export function App() {
    const [phones, setPhones] = useState([]);
    const scrollRef = useRef();

    function autoScroll() {
        scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const deletePhone = id => {
        const updatedPhones = phones.filter(item => item.id !== id);

        setPhones(updatedPhones);
    }

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setPhones(json.products))
    }, []);

    return (
        <Context.Provider value={deletePhone}>
            <Header autoScroll={autoScroll} />
            <ProductList phones={phones}/>
            <Footer ref={scrollRef} />
        </Context.Provider>
    )
}