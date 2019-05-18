import React from 'react';
import './scrolledFooter.css';
import Content from './HomeContent';
import Form from './FormContent';

class scrolledFooter extends React.Component {
  render() {
    return (
      <div>
        <div >
            <div id="main-content">
            <Content  />
            <div id="main-footer">
            
            <Form />
            <p className="footer-data"><hr />Soultion key ©2019</p>
            </div>
            </div>
         
        </div>
      </div>
    );
  }
}
export default scrolledFooter;