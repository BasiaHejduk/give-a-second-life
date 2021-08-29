import { useState } from 'react';
import Title from '../../components/title/Title';
import HelpDetails from './HelpDetail';
import './Help.scss';

const Help = () => {
    const [recipients, setRecipients] = useState("foundations");

    return (
        <div className="help" name="help">
            <Title text="Komu pomagamy?"></Title>
            <p className="help__description">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują, 
                komu pomagają i czego potrzebują.
            </p>
            <ul className="help__recipients-list">
                <li className="help__recipient" onClick={()=> setRecipients("foundations")}>Fundacjom</li>
                <li className="help__recipient" onClick={()=> setRecipients("organizations")}>Organizacjom <br/> pozarządowym</li>
                <li className="help__recipient" onClick={()=> setRecipients("locals")}>Lokalnym <br/> zbiórkom</li>
            </ul>
            <HelpDetails recipients={recipients}/>
        </div>
    )
};

export default Help;