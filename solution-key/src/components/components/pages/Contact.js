import React, { Component } from 'react';
import Footer from './Footer';
import Form from './FormContent';
import './Contact.css';
class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-div">
                    <div className="contact-div-text">
                        <h4>Contact</h4>
                        <h6>Soultion Key > <span className="contact-span-text">Contact </span></h6>
                    </div>
                </div>
                <Form />
                <span className="span-container"><Footer /></span>
            </div>
        );
    }
}

export default Contact;