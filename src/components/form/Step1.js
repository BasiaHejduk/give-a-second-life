import { useState } from "react";
import YellowBar from "../yellow-bar-form/YellowBar";
import './Form.scss';

const Step1 = ({updateStep, updateGiftState, giftChoiceState}) => {
    const [giftChoice, setGiftChoice] = useState(giftChoiceState);
    const [step1Validate, setStep1Validate] = useState(true);
    const handleFormSubmit = (e) => {
        e.preventDefault();  
    }
    const nextStep = () => {
        if (giftChoice === "") {
            setStep1Validate(false);
        } else {
            updateStep(2);
            updateGiftState(giftChoice);
        }
    };
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
                        <input className="form__input-radio" type="radio" name="gift-choice" 
                                value="used-clothes" onChange={()=>setGiftChoice("used-clothes")}
                                checked={giftChoice === "used-clothes"}
                        ></input>
                        <label className="form__label">ubrania, które nadają się do ponownego użytku</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" name="gift-choice" 
                                value="trash-clothes" onChange={()=>setGiftChoice("trash-clothes")}
                                checked={giftChoice === "trash-clothes"}
                        ></input>
                        <label className="form__label">ubrania do wyrzucenia</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" name="gift-choice" 
                                value="toys" onChange={()=>setGiftChoice("toys")}
                                checked={giftChoice === "toys"}
                        ></input>
                        <label className="form__label">zabawki</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" name="gift-choice" 
                                value="books" onChange={()=>setGiftChoice("books")}
                                checked={giftChoice === "books"}
                        ></input>
                        <label className="form__label">książki</label>
                    </div>
                    <div className="form__input-wrapper">
                        <input className="form__input-radio" type="radio" name="gift-choice" 
                                value="other" onChange={()=>setGiftChoice("other")}
                                checked={giftChoice === "other"}
                        ></input>
                        <label className="form__label">inne</label>
                    </div>
                </div>
                {step1Validate ? <p></p> : <p className="form__alert">Zaznacz jakie rzeczy chcesz oddać</p>}
                <div className="form__buttons-wrapper">
                    <button className="form__button" type="submit" onClick={nextStep}>Dalej</button>
                </div>
            </form>
        </div>
    </>

    )
};

export default Step1;