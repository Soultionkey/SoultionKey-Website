import React, { Component } from 'react';
import Content from './HomeContent';
import Footer from './Footer';
import './Home.css';
class Main extends Component {
  render() {
    return (
      <div>
       <Content  />
       <Footer />
       </div>
    );
  }
}

export default Main;