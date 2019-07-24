import React, { Component } from 'react';
import './code.css';
import image from './coding.jpg';








class CodeComponent extends Component {
  render() {
    return (
        
        <div className="component-wrapper code-component" id="code">
            <div className="title">
            <h1>Code</h1>
            <img src={image} alt="Logo" />

            </div>
        
        
        </div>
    );
  }
}

export default CodeComponent;
