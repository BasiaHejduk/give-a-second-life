import Title from '../../components/title/Title';
import './Help.scss';

const Help = () => {
    return (
        <div className="help" name="help">
            <Title text="Komu pomagamy?"></Title>
            <ul className="help__recipients-list">
                <li className="help__recipient">Fundacjom</li>
                <li className="help__recipient">Organizacjom <br/> pozarządowym</li>
                <li className="help__recipient">Lokalnym <br/> zbiórkom</li>
            </ul>
            <p className="help__description">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
                komu pomagają i czego potrzebują.
            </p>
            <div className="help__details" />
        </div>
    )
};

export default Help;