import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login-register/Login';
import Register from './pages/login-register/Register';
import Logout from './pages/login-register/Logout';
import FormPage from './pages/FormPage';
import fire from './firebase'
import './App.scss';

export const AppContext = React.createContext();

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setAuthError(false);
  };
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        if (err) {setAuthError(true)}
      })
  };
  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        if (err) {setAuthError(true)}
      })
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  };
  useEffect(() => {
    authListener();
  });

  return (
    <div className="App">
      <Router>
        <AppContext.Provider value={{
          user, 
          email,
          password,
          authError,
          setEmail,
          setPassword,
          handleSignUp,
          handleLogin,
          handleLogout,
        }}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/logowanie" exact component={Login}/>
          <Route path="/rejestracja" exact component={Register}/>
          <Route path="/wylogowano" exact component={Logout}/>
          <Route path="/oddaj-rzeczy" exact component={FormPage}/>
        </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
