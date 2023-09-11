import Navigation from "./Navigation";
import MainScreen from "./MainScreen";

function Header(props){
    const { bgColor } = props;

    return(
        <header style={{ backgroundColor: bgColor }}>
            <div className="container">
                <Navigation />
                <MainScreen />
            </div>
        </header>
    )
}

export default Header;