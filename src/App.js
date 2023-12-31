import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context-notes/NoteState';
import UserState from "./context-user/UserState";
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({msg: message, type: type})
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
    <UserState>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
          <Switch>
            <Route exact  path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route  path= "/about" >
              <About />
            </Route>
            <Route  path= "/login" >
              <Login showAlert={showAlert}/>
            </Route>
            <Route  path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
          </Switch>

        </div>
      </Router> 
    </NoteState>
    </UserState>
    </>
  );
}

export default App;
