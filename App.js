import React from 'react';
import Navbar from './Navbar.js';
import Section from './Section.js';
import Parallax from './Parallax.js';

class App extends React.Component {
   render() {
      return (
        <div>
          <Navbar />
          <Section textFirst scrollId="ourstory"/>
          <Section />
          <Section textFirst scrollId="activities"/>
        </div>
      );
   }
}

export default App;
