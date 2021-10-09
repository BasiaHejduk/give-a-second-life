import { useContext } from "react";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Help from "../sections/help/Help";
import HomeStart from "../sections/home-start/HomeStart";
import Steps from "../sections/steps/Steps";
import YellowBanner from "../sections/yellow-banner/YellowBanner";
import Menu from "../components/menu/Menu";
import MenuLoggedIn from "../components/menu/MenuLoggedIn";
import { AppContext } from "../App";

const Home = () => {
    const context = useContext(AppContext);
    return (
        <>
            {context.user ? <MenuLoggedIn/> : <Menu/>}
            <HomeStart/>
            <YellowBanner/>
            <Steps/>
            <About/>
            <Help/>
            <Contact/>
        </>
    )
};

export default Home;