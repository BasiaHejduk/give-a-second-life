import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login-register/Login';
import Register from './pages/login-register/Register';
import Logout from './pages/login-register/Logout';
import FormPage from './pages/FormPage';
import fire from './firebase'
import './App.scss';

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
                                authError={authError}
                                user={user}
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
                                authError={authError}
                                user={user}
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
