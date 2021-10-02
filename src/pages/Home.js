import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Help from "../sections/help/Help";
import HomeStart from "../sections/home-start/HomeStart";
import Steps from "../sections/steps/Steps";
import YellowBanner from "../sections/yellow-banner/YellowBanner";
import Menu from "../components/menu/Menu";
import MenuLoggedIn from "../components/menu/MenuLoggedIn";

const Home = ({handleLogout, user}) => {
    return (
        <>
            {user ? <MenuLoggedIn handleLogout={handleLogout} user={user}/> : <Menu/>}
            <HomeStart user={user}/>
            <YellowBanner/>
            <Steps user={user}/>
            <About/>
            <Help/>
            <Contact/>
        </>
    )
};

export default Home;