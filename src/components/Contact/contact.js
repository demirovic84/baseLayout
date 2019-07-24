import React, { Component } from 'react';
import './contact.css';
import image from './coding.jpg';








class ContactComponent extends Component {
  render() {
    return (

        
        <div className="component-wrapper contact-component" id="contact">
            <div className="title">
                <h1>Contact</h1>
                <img src={image} alt="Logo" />
            </div>

        </div>
    );

  }

}

export default ContactComponent;
