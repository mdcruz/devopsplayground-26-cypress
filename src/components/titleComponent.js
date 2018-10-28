import React from 'react';
import flickrIcon from '../icons/flickr.png';
import linkedInIcon from '../icons/linkedin.png';
import mailIcon from '../icons/gmail.png';

class TitleComponent extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <h1 id="title"> Marie Cruz </h1>
        </div>
        <div className="icons">
          <ul>
            <li id="linkedIn">
              <a href="https://www.linkedin.com/in/marie-desiree-cruz-95841242/"><img src={linkedInIcon} alt="LinkedIn" height="30" width="30" /></a>
            </li>
            <li id="flickr">
              <a href="https://www.flickr.com/photos/m_fotography/"><img src={flickrIcon} alt="flickr" height="30" width="30" /></a>
            </li>
            <li id="mail">
              <a href="mailto:marie.descruz@gmail.com"><img src={mailIcon} alt="mail" height="30" width="30" /></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TitleComponent;