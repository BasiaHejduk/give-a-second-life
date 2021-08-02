import Title from '../../components/title/Title';
import './Steps.scss';

const Steps = () => {
    return (
        <div className="steps">
            <Title text="Wystarczą 4 proste kroki"></Title>
            <div className="steps__banner">
                <div className="steps__column">
                    <div className="steps__icon steps__icon--1"></div>
                    <p className="steps__to-do">Wybierz rzeczy</p>
                    <p className="steps__details">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps__column">
                    <div className="steps__icon steps__icon--2"></div>
                    <p className="steps__to-do">Spakuj je</p>
                    <p className="steps__details">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps__column">
                    <div className="steps__icon steps__icon--3"></div>
                    <p className="steps__to-do">Zdecyduj komu chcesz pomóc</p>
                    <p className="steps__details">wybierz zaufane miejsce</p>
                </div>
                <div className="steps__column">
                    <div className="steps__icon steps__icon--4"></div>
                    <p className="steps__to-do">Zamów kuriera</p>
                    <p className="steps__details">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button className="steps__button">ODDAJ <br/> RZECZY </button>
        </div>
    )
};

export default Steps;