import { useEffect, useState, useContext } from 'react';
import fire from '../../firebase';
import { FormContext } from "./Form";
import './Form.scss';

const Summary = () => {
    const context = useContext(FormContext);
    const [summaryBags, setSummaryBags] = useState("");
    const [summaryGifts, setSummaryGifts] = useState("");

    useEffect(() => {
        if (context.bagsState === "1") {setSummaryBags("1 worek")};
        if (context.bagsState === "2" || context.bagsState === "3" || context.bagsState === "4") {setSummaryBags(`${context.bagsState} worki`)};
        if (context.bagsState === "5") {setSummaryBags("5 worków")};
        if (context.giftChoiceState === "used-clothes") {setSummaryGifts("ubrania, które nadają się do użycia")};
        if (context.giftChoiceState === "trash-clothes") {setSummaryGifts("ubrania do wyrzucenia")};
        if (context.giftChoiceState === "toys") {setSummaryGifts("zabawki")};
        if (context.giftChoiceState === "books") {setSummaryGifts("książki")};
        if (context.giftChoiceState === "other") {setSummaryGifts("inne rzeczy")};
    },[context.bagsState, context.giftChoiceState]);

    const nextStep = () => {context.updateStep(6)};
    const previousStep = () => {context.updateStep(4)};
    const sendForm = (e) => {
        e.preventDefault();
        nextStep();
        fire.firestore().collection('giftDeclarations').add({
            giftType: context.giftChoiceState,
            bagsNumber: context.bagsState,
            toWho: context.toWhoState,
            localization: context.localizationState,
            street: context.streetState,
            city: context.cityState,
            postCode: context.postCodeState,
            phone: context.phoneState,
            date: context.dateState,
            hour: context.hourState,
            remarks: context.remarksState
        });
    }

    return (
    <>
        <div className="form form__summary">
            <h3 className="form__headline">Podsumowanie Twojej darowizny</h3>
            <p className="form__tagline">Oddajesz:</p>
            <div className="form__summary-wrapper">
                <div className="form__summary-icon form__summary-icon--gifts"></div>
                <p className="form__summary-text">{`${summaryBags}, ${summaryGifts}, ${context.toWhoState}`}</p>
            </div>
            <div className="form__summary-wrapper">
                <div className="form__summary-icon form__summary-icon--local"></div>
                <p className="form__summary-text">dla lokalizacji: {context.localizationState} {context.organizationState}</p>
            </div>
            <div className="form__form">
                <div className="form__content-wrapper">
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Adres odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Ulica</label>
                            <p className="form__summary-text">{context.streetState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Miasto</label>
                            <p className="form__summary-text">{context.cityState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Kod <br/> pocztowy</label>
                            <p className="form__summary-text">{context.postCodeState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Numer <br/> telefonu</label>
                            <p className="form__summary-text">{context.phoneState}</p>
                        </div>
                    </div>
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Termin odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Data</label>
                            <p className="form__summary-text">{context.dateState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Godzina</label>
                            <p className="form__summary-text">{context.hourState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Uwagi <br/> dla kuriera</label>
                            <p className="form__summary-text">{context.remarksState}</p>
                        </div>
                    </div>
                </div>
                <div className="form__buttons-wrapper">
                    <button className="form__button" onClick={previousStep}>Wstecz</button>
                    <button className="form__button" type="submit" onClick={sendForm}>Potwierdzam</button>
                </div>
            </div>
        </div>
    </>
    )
};

export default Summary;