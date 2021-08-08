import Form from '../../components/form/Form';
import YellowBar from '../../components/yellow-bar-form/YellowBar';

const FormWrapper = () => {
    return (
        <>
            <YellowBar text={`Uzupełnij szczegóły dotyczące Twoich rzeczy. 
                Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.`}/>
            <Form/>
        </>
    )
};

export default FormWrapper;