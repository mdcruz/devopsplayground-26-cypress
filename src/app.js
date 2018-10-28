import React from 'react';
import './app.css';
import TitleComponent from './components/titleComponent';
import ImageComponent from './components/imageComponent';
import FooterComponent from './components/footerComponent';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <TitleComponent />
        <ImageComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;