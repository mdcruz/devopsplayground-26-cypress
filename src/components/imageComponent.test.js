import React from 'react';
import ReactDOM from 'react-dom';
import ImageComponent from './imageComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
