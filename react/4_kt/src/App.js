import './style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
    const scrollRef = useRef();

    function autoScroll() {
        scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <Router basename='js-frameworks'>
            <Header autoScroll={autoScroll} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/product/:id' element={<ProductPage />} />

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer ref={scrollRef} />
        </Router>
    )
}