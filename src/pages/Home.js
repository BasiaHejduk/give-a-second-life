import About from "../sections/about/About"
import Contact from "../sections/contact/Contact"
import Help from "../sections/help/Help"
import HomeStart from "../sections/home-start/HomeStart"
import Steps from "../sections/steps/Steps"
import YellowBanner from "../sections/yellow-banner/YellowBanner"

const Home = () => {
    return (
        <>
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