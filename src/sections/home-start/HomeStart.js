import Title from '../../components/title/Title';
import Menu from '../../components/menu/Menu';
import './HomeStart.scss';


const HomeStart = () => {
    return (
        <div className="start">
            <Menu/>
            <div className="start__wrapper">
                <div className="start__img"></div>
                <div className="start__call-to-action">
                    <Title text={`Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce`}></Title>
                    <div className="start__buttons">
                        <button className="start__button">ODDAJ <br/> RZECZY</button>
                        <button className="start__button">ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeStart;