import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRout from './components/PrivateRout/PrivateRout';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
  <p>Name: {loggedInUser.name}</p>

      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRout path="/book/:bedType">
              <Book />
            </PrivateRout>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
       </Router>
    </UserContext.Provider>
  );
}

export default App;
