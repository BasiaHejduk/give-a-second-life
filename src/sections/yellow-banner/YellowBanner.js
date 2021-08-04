import './YellowBanner.scss';

const YellowBanner = () => {
    return (
        <div className="yellow-banner" name="yellow-banner">
            <div className="yellow-banner__column">
                <p className="yellow-banner__number">10</p>
                <p className="yellow-banner__headline">ODDANYCH WORKÓW</p>
                <p className="yellow-banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="yellow-banner__column">
                <p className="yellow-banner__number">5</p>
                <p className="yellow-banner__headline">WSPARTYCH ORGANIZACJI</p>
                <p className="yellow-banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="yellow-banner__column">
                <p className="yellow-banner__number">7</p>
                <p className="yellow-banner__headline">ZORGANIZOWANYCH ZBIÓREK</p>
                <p className="yellow-banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
};

export default YellowBanner;