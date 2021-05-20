import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './Home'
import Login from './Login';
import Header from './Header'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
      
  );
}

export default App;



// e73e787efce515fd40c2549b51799c09