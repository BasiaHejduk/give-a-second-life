import './Title.scss';

const Title = ({text}) => {
    return (
        <div className="title">
            <h2 className="title__text">{text}</h2>
            <div className="title__decor"></div>
        </div>
    )
};

export default Title;