import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import Login from './containers/login'
import   firebase from "firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { useEffect } from 'react';


function App() {

  return (
    <div className="App">
      <Router>
        <div className="App">
          <div className="container d-flex align-items-center flex-column">
            <Switch>
              <Route path={"/"} exact component={Login} />
              <Route path={"/orders"} exact component={Layout} />
            
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
