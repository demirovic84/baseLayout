import React, { Component } from 'react';
import './about.css';
import image from './coding.jpg';







class AboutComponent extends Component {
  render() {
    return (
        
        <div className="component-wrapper about-component" id="about">
            <div className="title">
                <h1>About</h1>
                <img src={image} alt="Logo" />


            </div>
        
        
        </div>
    );
  }
}

export default AboutComponent;
