import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';
import Home from './components/Home'
import Artists from './components/Artists'
import Albums from './components/Albums';
import SongCardGenerator from './components/SongCardGenerator';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path='/' component={MyNavBar} />
          <Route path='/home' exact component={SongCardGenerator} />
          <Route path='/home' exact component={Home} />
          <Route path='/artists' exact component={Artists} />
          <Route path='/albums' exact component={Albums} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;