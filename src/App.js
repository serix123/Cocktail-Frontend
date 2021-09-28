import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getRecipes} from './redux/actions/recipeActions'

import Navbar from './components/nav/Navbar';
import Home from './components/screens/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Recipes from './components/nav/Recipes';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content ">
          <Switch>
            <Route path="/Recipes" component={Recipes} />
            <Route path="/Examples" component={Recipes} />
            <Route path="/Blog" component={Recipes} />
            <Route path="/SignIn" component={Login} />
            <Route path="/SignUp" component={Register}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
