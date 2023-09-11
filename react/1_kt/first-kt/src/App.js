import Header from "./components/Header/Header";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourtSection/FourthSection";
import Footer from "./components/Footer";

function App(){
    return(
        <>
            <Header bgColor='#F4F9E2' />
            <SecondSection bgColor='#62D0DF' />
            <ThirdSection textColor="#22356F" />
            <FourthSection />
            <Footer textColor="#22356F" />
        </>
    )
}

export default App;