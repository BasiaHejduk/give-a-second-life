import About from "../sections/about/About"
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
        </>
    )
};

export default Home;