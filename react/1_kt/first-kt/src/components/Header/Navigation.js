import { ReactComponent as LogoComponent } from "../../images/logo.svg";

function Navigation(){
    const menuItems = ['О нас', 'Услуги', 'Аренда'];

    return(
        <nav className="navBar">
            <LogoComponent />
            <ul className="headerMenu">
                { menuItems.map((elem, index) =>
                    <li className="headerMenu__item" key={index}>
                        <a href="#">
                            {elem}
                        </a>
                    </li>) }
            </ul>
            <a href="#" className="saleButton">Связаться</a>
        </nav>
    )
}

export default Navigation;