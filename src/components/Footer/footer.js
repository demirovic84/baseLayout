import React, { Component } from 'react';
import './footer.css';





class FooterComponent extends Component {
  render() {
    return (
        
        <div className="footer-wrapper">
            <div className="title">
            <h1>Footer</h1>
            </div>
            <div className="footer-boxes">
                <div className="box box1">
                    <p>Box 1</p>
                </div >
                <div className="box box2">
                <p>Box 1</p>
                </div>
                <div className="box box3">
                <p>Box 1</p>
                </div>
            </div>
            <div className="footer-bottom">
            <p>Box bottom</p>
            </div>
        </div>
    );
  }
}

export default FooterComponent;