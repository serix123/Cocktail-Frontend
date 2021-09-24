import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Recipes from './components/nav/Recipes';


function App() {
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
