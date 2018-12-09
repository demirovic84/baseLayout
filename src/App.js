import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About/about';
import Code from './components/Code/code';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here








class App extends Component {
  render() {
    return (
      
        <div className="App" id="home">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="title">
            <h1>Welcome</h1>
          </div>
              <Router>
                <div className="main-menu">
                  <Link smooth to="/#home"><button>Home</button></Link>
                  <Link smooth to="/About#about"><button>About</button></Link>
                  <Link smooth to="/Code#code"><button>Code</button></Link>
                  <Link smooth to="/Contact#contact"><button>Contact</button></Link>
                </div>
              </Router>
          </header>
          <About />
          <Code />
          <Contact />
          <Footer />
          <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={150}
              EasingType='easeOutCubic'
              AnimationDuration={500}
              ContainerClassName='ScrollUpButton__Container'
              TransitionClassName='ScrollUpButton__Toggled'
              style={{}}
              ToggledStyle={{}}
          />
        </div>
    );
  }
}

export default App;