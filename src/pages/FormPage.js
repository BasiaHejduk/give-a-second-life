import MenuLoggedIn from '../components/menu/MenuLoggedIn';
import Contact from '../sections/contact/Contact';
import FormStart from '../sections/form-start/FormStart';
import Form from '../sections/form/Form';

const FormPage = () => {
    return (
        <>
            <MenuLoggedIn/>
            <FormStart/>
            <Form/>
            <Contact/>
        </>
    )
};

export default FormPage;