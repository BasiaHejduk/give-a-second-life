import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';
import Login from './pages/login-register/Login';
import Register from './pages/login-register/Register';
import Logout from './pages/login-register/Logout';
import FormPage from './pages/FormPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/logowanie" exact component={Login}/>
          <Route path="/rejestracja" exact component={Register}/>
          <Route path="/wylogowano" exact component={Logout}/>
          <Route path="/oddaj-rzeczy" exact component={FormPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
