import YellowBar from "../yellow-bar-form/YellowBar";
import './Form.scss';

const Step4 = (props) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        
    }

    const nextStep = () => {props.update(5)};
    const previousStep = () => {props.update(3)};

    return (
    <>
        <YellowBar text={`Podaj adres oraz termin odbioru rzeczy.`}/>       
        <div className="form">
            <p className="form__step">Krok 4/4</p>
            <h3 className="form__headline">Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
            <form className="form__form" onSubmit={handleFormSubmit}>
                <div className="form__content-wrapper">
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Adres odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Ulica</label>
                            <input className="form__input-text form__input-text--step4" type="text"></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Miasto</label>
                            <input className="form__input-text form__input-text--step4" type="text"></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Kod <br/> pocztowy</label>
                            <input className="form__input-text form__input-text--step4" type="text"></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Numer <br/> telefonu</label>
                            <input className="form__input-text form__input-text--step4" type="text"></input>
                        </div>
                    </div>
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Termin odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Data</label>
                            <input className="form__input-text form__input-text--step4" type="text"></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Godzina</label>
                            <input className="form__input-text form__input-text--step4" type="text"></input>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Uwagi <br/> dla kuriera</label>
                            <textarea className="form__input-text form__input-text--step4 form__input-text--textarea" 
                                        type="textarea"></textarea>
                        </div>
                    </div>
                </div>
                <div className="form__buttons-wrapper">
                    <button className="form__button" onClick={previousStep}>Wstecz</button>
                    <button className="form__button" type="submit" onClick={nextStep}>Dalej</button>
                </div>
            </form>
        </div>
    </>

    )
};

export default Step4;