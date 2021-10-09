import { useContext } from 'react';
import Form from '../components/form/Form';
import Contact from '../sections/contact/Contact';
import FormStart from '../sections/form-start/FormStart';
import MenuLoggedIn from '../components/menu/MenuLoggedIn';
import Menu from '../components/menu/Menu';
import { AppContext } from '../App';

const FormPage = () => {
    const context = useContext(AppContext);
    window.scrollTo(0, 0);
    return (
        <>
            {context.user ? <MenuLoggedIn/> : <Menu/>}
            <FormStart/>
            <Form/>
            <Contact/>
        </>
    )
};

export default FormPage;