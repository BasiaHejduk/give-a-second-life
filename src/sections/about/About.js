import Title from '../../components/title/Title';
import './About.scss';

const About = () => {
    return (
        <div className="about" name="about">
            <div className="about__info">
                <Title text="O nas"></Title>
                <div className="about__info-wrapper">
                    <p className="about__text">
                        Nori grape silver beet broccoli kombu beet greens fava 
                        bean potato quandong celery. Bunya nuts black-eyed pea prairie 
                        turnip leek lentil turnip greens parsnip.</p>
                    <div className="about__signature"></div>
                </div>
            </div>
            <div className="about__img"></div>
        </div>
    )
};

export default About;