import './YellowBar.scss';

const YellowBar = ({text}) => {
    return (
        <div className="yellow-bar">
            <h3 className="yellow-bar__warning">Ważne!</h3>
            <p className="yellow-bar__text">{text}</p>
        </div>
    )
};

export default YellowBar;