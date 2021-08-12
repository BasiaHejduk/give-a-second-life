import Title from '../title/Title';
import './Form.scss';

const Thanks = () => {
    return (
        <>    
            <div className="form">
                <div className="form__thanks-title">
                    <Title text="Dziękujemy za przesłanie formularza. 
                            Na maila prześlemy wszelkie informacje o odbiorze"/>
                </div>
            </div>
        </>
    )
};

export default Thanks;