import { useEffect, useState } from 'react';
import fire from '../../firebase';
import './Form.scss';

const Summary = ({updateStep, giftChoiceState, bagsState, localizationState, toWhoState, organizationState,
                    streetState, cityState, postCodeState, phoneState, dateState, hourState, remarksState}) => {
    const [summaryBags, setSummaryBags] = useState("");
    const [summaryGifts, setSummaryGifts] = useState("");

    useEffect(() => {
        if (bagsState === "1") {setSummaryBags("1 worek")};
        if (bagsState === "2" || bagsState === "3" || bagsState === "4") {setSummaryBags(`${bagsState} worki`)};
        if (bagsState === "5") {setSummaryBags("5 worków")};
        if (giftChoiceState === "used-clothes") {setSummaryGifts("ubrania, które nadają się do użycia")};
        if (giftChoiceState === "trash-clothes") {setSummaryGifts("ubrania do wyrzucenia")};
        if (giftChoiceState === "toys") {setSummaryGifts("zabawki")};
        if (giftChoiceState === "books") {setSummaryGifts("książki")};
        if (giftChoiceState === "other") {setSummaryGifts("inne rzeczy")};
    },[bagsState, giftChoiceState]);

    const nextStep = () => {updateStep(6)};
    const previousStep = () => {updateStep(4)};
    const sendForm = () => {
        nextStep();
        fire.firestore().collection('giftDeclarations').add({
            giftType: giftChoiceState,
            bagsNumber: bagsState,
            toWho: toWhoState,
            localization: localizationState,
            street: streetState,
            city: cityState,
            postCode: postCodeState,
            phone: phoneState,
            date: dateState,
            hour: hourState,
            remarks: remarksState
        });
    }

    return (
    <>
        <div className="form form__summary">
            <h3 className="form__headline">Podsumowanie Twojej darowizny</h3>
            <p className="form__tagline">Oddajesz:</p>
            <div className="form__summary-wrapper">
                <div className="form__summary-icon form__summary-icon--gifts"></div>
                <p className="form__summary-text">{`${summaryBags}, ${summaryGifts}, ${toWhoState}`}</p>
            </div>
            <div className="form__summary-wrapper">
                <div className="form__summary-icon form__summary-icon--local"></div>
                <p className="form__summary-text">dla lokalizacji: {localizationState} {organizationState}</p>
            </div>
            <div className="form__form">
                <div className="form__content-wrapper">
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Adres odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Ulica</label>
                            <p className="form__summary-text">{streetState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Miasto</label>
                            <p className="form__summary-text">{cityState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Kod <br/> pocztowy</label>
                            <p className="form__summary-text">{postCodeState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Numer <br/> telefonu</label>
                            <p className="form__summary-text">{phoneState}</p>
                        </div>
                    </div>
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Termin odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Data</label>
                            <p className="form__summary-text">{dateState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Godzina</label>
                            <p className="form__summary-text">{hourState}</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Uwagi <br/> dla kuriera</label>
                            <p className="form__summary-text">{remarksState}</p>
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