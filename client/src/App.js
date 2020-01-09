import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Company from './Routes/Company';
import Contacts from './Routes/Contacts';
import Home from './Routes/Home';
import Intranet from './Routes/Intranet';
import News from './Routes/News';
import Notfound from './Routes/Notfound';
import Products from './Routes/Products';

import BurgerMenu from './Components/BurgerMenu';
import Footer from './Components/Footer';
import Header from './Components/Header';

import './Styles/Common.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return (
        <Router>
          <BurgerMenu />
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
      )
    } else {
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
  }
}
