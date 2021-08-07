import MenuLoggedIn from '../../components/menu/MenuLoggedIn';
import Title from '../../components/title/Title';
import './FormStart.scss';

const FormStart = () => {
    return (
        <div className="form-start">
            <MenuLoggedIn/>
            <div className="form-start__wrapper">
                <div className="form-start__img"></div>
                <div className="form-start__call-to-action">
                    <Title text={`Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM`}></Title>
                    <p className="form-start__headline">Wystarczą 4 proste kroki</p>
                    <div className="form-start__steps">
                        <div className="form-start__rhomb">
                            <p className="form-start__step-number">1</p>
                            <p className="form-start__step-description">Wybierz rzeczy</p>
                        </div>
                        <div className="form-start__rhomb">
                            <p className="form-start__step-number">2</p>
                            <p className="form-start__step-description">Spakuj je w worki</p>
                        </div>
                        <div className="form-start__rhomb">
                            <p className="form-start__step-number">3</p>
                            <p className="form-start__step-description">Wybierz fundację</p>
                        </div>
                        <div className="form-start__rhomb">
                            <p className="form-start__step-number">4</p>
                            <p className="form-start__step-description">Zamów kuriera</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default FormStart;