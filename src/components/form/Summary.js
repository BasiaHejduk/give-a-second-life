import './Form.scss';

const Summary = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        
    }

    const nextStep = () => {
        console.log("Następny krok")
    }

    return (
    <>
        <div className="form">
            <h3 className="form__headline">Podsumowanie Twojej darowizny</h3>
            <p className="form__tagline">Oddajesz:</p>
            <div className="form__summary-wrapper">
                <div className="form__summary-icon form__summary-icon--gifts"></div>
                <p className="form__summary-text">4 worki, ubrania w dobrym stanie, dzieciom</p>
            </div>
            <div className="form__summary-wrapper">
                <div className="form__summary-icon form__summary-icon--local"></div>
                <p className="form__summary-text">dla lokalizacji: Warszawa</p>
            </div>
            <form className="form__form" onSubmit={handleFormSubmit}>
                <div className="form__content-wrapper">
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Adres odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Ulica</label>
                            <p className="form__summary-text">Przykład</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Miasto</label>
                            <p className="form__summary-text">Przykład</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Kod <br/> pocztowy</label>
                            <p className="form__summary-text">Przykład</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Numer <br/> telefonu</label>
                            <p className="form__summary-text">Przykład</p>
                        </div>
                    </div>
                    <div className="form__content form__content--step4">
                        <p className="form__tagline">Termin odbioru:</p>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Data</label>
                            <p className="form__summary-text">Przykład</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Godzina</label>
                            <p className="form__summary-text">Przykład</p>
                        </div>
                        <div className="form__input-wrapper form__input-wrapper--step4">
                            <label className="form__label">Uwagi <br/> dla kuriera</label>
                            <p className="form__summary-text">Przykład</p>
                        </div>
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

export default Summary;