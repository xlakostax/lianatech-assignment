import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Company from './Routes/Company';
import Contacts from './Routes/Contacts';
import Home from './Routes/Home';
import Intranet from './Routes/Intranet';
import News from './Routes/News';
import Notfound from './Routes/Notfound';
import Products from './Routes/Products';

import Footer from './Components/Footer';
import Header from './Components/Header';

import './Styles/Common.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/news' component = {News} />
        <Route exact path = '/intranet' component = {Intranet} />
        <Route exact path = '/company' component = {Company} />
        <Route exact path = '/products' component = {Products} />
        <Route exact path = '/contacts' component = {Contacts} />
        <Route component = {Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
