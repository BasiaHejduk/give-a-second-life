import Form from '../components/form/Form';
import Contact from '../sections/contact/Contact';
import FormStart from '../sections/form-start/FormStart';
import MenuLoggedIn from '../components/menu/MenuLoggedIn';

const FormPage = ({handleLogout, user}) => {
    window.scrollTo(0, 0);
    return (
        <>
            <MenuLoggedIn handleLogout={handleLogout} user={user}/>
            <FormStart/>
            <Form/>
            <Contact/>
        </>
    )
};

export default FormPage;