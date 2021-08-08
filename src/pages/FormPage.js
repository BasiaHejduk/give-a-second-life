import Form from '../components/form/Form';
import MenuLoggedIn from '../components/menu/MenuLoggedIn';
import Contact from '../sections/contact/Contact';
import FormStart from '../sections/form-start/FormStart';

const FormPage = () => {
    // window.scrollTo(0, 0);
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