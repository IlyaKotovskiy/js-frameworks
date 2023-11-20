import { Link } from "react-router-dom"
import { Button } from "../UI/Button"

export function Header({ autoScroll }) {
    const links = [
        { id: 1, title: 'Главная', link: '/' },
        { id: 2, title: 'Товары', link: '/products' }
    ]

    return (
        <header>
            <div className="container">
                <ul className="header-nav">
                    {links.map(elem => (
                        <Link key={elem.id} to={elem.link}>
                            <Button title={elem.title} />
                        </Link>
                    ))}
                </ul>
                <Button title={'Scroll to Footer!'} onClick={autoScroll} />
            </div>
        </header>
    )
}