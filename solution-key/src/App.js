import React, { Component } from 'react';
import './App.css';
import Services from './components/pages/Webservices';
import Contact from '../src/components/pages/Contact';
import Home from '../src/components/pages/Home';
import MobileServices from '../src/components/pages/MobileSevices';
import About from '../src/components/pages/About';
import Blog from '../src/components/pages/Blog';
import SEO from './components/pages/SEO';
import Layout from '../src/components/pages/Layout';
import ScrolledHome from '../src/components/pages/HomeContent'
import { Switch, Route } from 'react-router-dom';
import Ecommerce from '../src/components/pages/Ecommerce';
class App extends Component {
  render() {
    return (
      <Layout>
      <div className="App">
        <Switch>
          <Route exact path='/' component={ScrolledHome}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/web' component={Services}></Route>
          <Route path='/mobile' component={MobileServices}></Route>
          <Route path='/seo' component={SEO} ></Route>
          <Route path='/contact' component={Contact} ></Route>
          <Route path='/blog' component={Blog} ></Route>
          <Route path='/ecommerce' component={Ecommerce} ></Route>

        </Switch>
      </div>
      </Layout>
    );
  }
}

export default App;