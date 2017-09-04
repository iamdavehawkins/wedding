import React from 'react';
import Navbar from './Navbar.js';
import Section from './Section.js';
import Parallax from './Parallax.js';

var MediaQuery = require('react-responsive');

class App extends React.Component {
   render() {
      return (
        <div>
          <Navbar />
          <Section textFirst scrollId="ourstory"/>
          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="http://farm3.static.flickr.com/2151/1521173321_cbe142bcf5.jpg" />
          </MediaQuery>
          <Section />
          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="http://farm3.static.flickr.com/2151/1521173321_cbe142bcf5.jpg" />
          </MediaQuery>
          <Section textFirst scrollId="activities"/>
        </div>
      );
   }
}

export default App;
