<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/recipeActions';

import Navbar from './components/nav/Navbar';
import Home from './components/screens/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Recipes from './components/nav/Recipes';

>>>>>>> Stashed changes

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
