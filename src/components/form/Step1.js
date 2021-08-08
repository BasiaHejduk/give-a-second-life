import YellowBar from "../yellow-bar-form/YellowBar";
import './Form.scss';

const Step1 = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        
    }

    const nextStep = () => {
        console.log("Następny krok")
    }

    return (
    <>
        <YellowBar text={`Uzupełnij szczegóły dotyczące Twoich rzeczy. 
            Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.`}/>       
        <div className="form">
            <p className="form__step">Krok 1/4</p>
            <h3 className="form__headline">Zaznacz co chcesz oddać:</h3>
            <form className="form__form" onSubmit={handleFormSubmit}>
                <div className="form__content">
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" id="choice1" value="used-clothes" name="gift-choice"></input>
                        <label className="form__label">ubrania, które nadają się do ponownego użytku</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" id="choice2" value="trash-clothes" name="gift-choice"></input>
                        <label className="form__label">ubrania do wyrzucenia</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" id="choice3" value="toys" name="gift-choice"></input>
                        <label className="form__label">zabawki</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" id="choice4" value="books" name="gift-choice"></input>
                        <label className="form__label">książki</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" id="choice5" value="other" name="gift-choice"></input>
                        <label className="form__label">inne</label>
                    </div>
                </div>
                <div className="form__buttons-wrapper">
                    <button className="form__button" type="submit" onClick={nextStep}>Dalej</button>
                </div>
            </form>
        </div>
    </>

    )
};

export default Step1;