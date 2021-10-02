import Form from '../components/form/Form';
import Contact from '../sections/contact/Contact';
import FormStart from '../sections/form-start/FormStart';
import MenuLoggedIn from '../components/menu/MenuLoggedIn';
import Menu from '../components/menu/Menu';

const FormPage = ({handleLogout, user}) => {
    window.scrollTo(0, 0);
    return (
        <>
            {user ? <MenuLoggedIn handleLogout={handleLogout} user={user}/> : <Menu/>}
            <FormStart/>
            <Form/>
            <Contact/>
        </>
    )
};

export default FormPage;