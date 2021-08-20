import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Header from './components/Header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Favourites from './pages/favourites/favourites.component';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/favourites' component={Favourites}/>
        </Switch>
    </div>
  );
}

export default App;
