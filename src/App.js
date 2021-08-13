import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login-register/Login';
import Register from './pages/login-register/Register';
import Logout from './pages/login-register/Logout';
import FormPage from './pages/FormPage';
import firebase from './firebase';
import './App.scss';


const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default: 
            setEmailError("");
            setPasswordError("");
        }
      })
  };

  const handleSignUp = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/ivalid-email":
            setEmailError(err.message);
            break;
          case "auth/invalid-password":
            setPasswordError(err.message);
            break;
          default:
            setEmailError("");
            setPasswordError("");
        }
      })
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
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
        <Switch>
          <Route 
            path="/" exact 
            render={(props) => <Home {... props} 
                                handleLogout={handleLogout}
                                user={user}
                                />}
          />
          <Route 
            path="/logowanie" exact 
            render={(props) => <Login {...props} 
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                handleLogin={handleLogin}
                                emailError={emailError}
                                passwordError={passwordError}
                                />}
          />
          <Route 
            path="/rejestracja" exact 
            render={(props) => <Register {...props}
                                email={email}                                
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                handleSignUp={handleSignUp}
                                emailError={emailError}
                                passwordError={passwordError}
                                />}
          />
          <Route path="/wylogowano" exact component={Logout}/>
          <Route 
            path="/oddaj-rzeczy" exact 
            render={(props) => <FormPage {...props}
                                handleLogout={handleLogout}
                                user={user}
                                />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
