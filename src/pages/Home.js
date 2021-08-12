import About from "../sections/about/About"
import Contact from "../sections/contact/Contact"
import Help from "../sections/help/Help"
import HomeStart from "../sections/home-start/HomeStart"
import Steps from "../sections/steps/Steps"
import YellowBanner from "../sections/yellow-banner/YellowBanner"

const Home = ({handleLogout, user, email}) => {
    return (
        <>
            <HomeStart handleLogout={handleLogout} user={user} email={email}/>
            <YellowBanner/>
            <Steps user={user}/>
            <About/>
            <Help/>
            <Contact/>
        </>
    )
};

export default Home;