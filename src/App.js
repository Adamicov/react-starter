import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './pages/Nav';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/sign-up" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
