import { Link } from 'react-router-dom';
import Title from '../../components/title/Title';
import './HomeStart.scss';

const HomeStart = () => {
    return (
        <div className="start" name="start">
            <div className="start__wrapper">
                <div className="start__img"></div>
                <div className="start__call-to-action">
                    <Title text={`Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce`}></Title>
                    <div className="start__buttons">
                        <Link to= "/oddaj-rzeczy">
                            <button className="start__button">ODDAJ <br/> RZECZY</button>
                        </Link>
                        <button className="start__button">ZORGANIZUJ <br/> ZBIÓRKĘ</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeStart;