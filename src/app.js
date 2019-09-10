import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';

import ImageComponent from './components/imageComponent';
import FooterComponent from './components/footerComponent';
import AuthorComponent from './components/authorComponent';

class App extends React.Component {
  render () {
    return (
      <Router>
          <Route path='/gallery' render={props => 
            <div className="app">
              <div className="header">Image Gallery</div>
              <ImageComponent />
              <FooterComponent />
            </div>
          } />
          <Route path='/authors' component = {AuthorComponent} />
      </Router>
    );
  }
}

export default App;