import { useEffect, useState } from 'react';
import './Form.scss';

const Summary = ({update, giftChoiceState, bagsState, localizationState, toWhoState, organizationState,
                    streetState, cityState, postCodeState, phoneState, dateState, hourState, remarksState}) => {
    const [summaryBags, setSummaryBags] = useState("");
    const [summaryGifts, setSummaryGifts] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    }
    useEffect(() => {
        if (bagsState === "1") {setSummaryBags("1 worek")};
        if (bagsState === "2" || bagsState === "3" || bagsState === "4") {setSummaryBags(`${bagsState} worki`)};
        if (bagsState === "5") {setSummaryBags("5 worków")};
        if (giftChoiceState === "used-clothes") {setSummaryGifts("ubrania, które nadają się do ponownego użycia")};
        if (giftChoiceState === "trash-clothes") {setSummaryGifts("ubrania do wyrzucenia")};
        if (giftChoiceState === "toys") {setSummaryGifts("zabawki")};
        if (giftChoiceState === "books") {setSummaryGifts("książki")};
        if (giftChoiceState === "other") {setSummaryGifts("inne rzeczy")};
    },[bagsState, giftChoiceState])
    const nextStep = () => {update(6)};
    const previousStep = () => {update(4)};
    return (
    <>
        <div className="form">
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
            <form className="form__form" onSubmit={handleFormSubmit}>
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
                    <button className="form__button" type="submit" onClick={nextStep}>Potwierdzam</button>
                </div>
            </form>
        </div>
    </>
    )
};

export default Summary;