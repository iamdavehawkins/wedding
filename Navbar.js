import React from 'react';
import ReactDOM from 'react-dom';
import NavbarItem from './NavbarItem.js';
import Image from './Image.js';

var MediaQuery = require('react-responsive');

var baseNavStyle = {
  backgroundColor: 'rgba(255, 255, 255, .2)',
  margin: '0px',
  padding: '0px',
  position: 'fixed',
  width: '100%'
}

var navStyle = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  alignItems: 'center'
  // display: 'none'
};

var navStyleResp = {
  display: 'none',
  flexDirection: 'column',
  listStyle: 'none',
  float: 'right',
  clear: 'right'
}

var linkContainer = {
  display: "flex",
  flexDirection: "column"
}

class Navbar extends React.Component {

  burgerToggle() {
    let linksEl = document.querySelector('.respLinks');
    if (linksEl.style.display === 'flex') {
              linksEl.style.display = 'none';
          } else {
              linksEl.style.display = 'flex';
          }
  }

  render() {
    return (
      <div style={ baseNavStyle }>
        <MediaQuery minWidth={1224}>
          <div style={ navStyle }>
            <NavbarItem idlink="ourstory" text="Our Story"/>
            <NavbarItem idlink="thewedding" text="The Wedding"/>
            <NavbarItem idlink="gettingthere" text="Getting There" />          
            {/* <Image height="42" src="http://4.bp.blogspot.com/-QEoJOBBqHl0/USfg7BDoURI/AAAAAAAAAqQ/V-bANSTGe08/s640/MertzMono1.png" /> */}
            <NavbarItem idlink="lodging" text="Lodging"/>
            <NavbarItem idlink="activities" text="Activities"/>
            <NavbarItem idlink="registry" text="Registry" />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <div style={ navStyle }>
            {/* <Image height="42" src="http://4.bp.blogspot.com/-QEoJOBBqHl0/USfg7BDoURI/AAAAAAAAAqQ/V-bANSTGe08/s640/MertzMono1.png" /> */}
            <div style={ linkContainer } >
              <button width="100%" onClick={this.burgerToggle} className="fa fa-bars fa-2x"></button>
              <div style={ navStyleResp } className="respLinks">
                <NavbarItem idlink="ourstory" text="Our Story"/>
                <NavbarItem idlink="thewedding" text="The Wedding"/>
                <NavbarItem idlink="gettingthere" text="Getting There" />
                <NavbarItem idlink="lodging" text="Lodging"/>
                <NavbarItem idlink="activities" text="Activities"/>
                <NavbarItem idlink="registry" text="Registry" />
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Navbar;
