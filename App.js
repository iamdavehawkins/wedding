import React from 'react';
import Navbar from './Navbar.js';
import Section from './Section.js';
import Parallax from './Parallax.js';
import Footer from './Footer.js';

var MediaQuery = require('react-responsive');

const textStyle = {
  padding: '0 50px 0 50px',
  color: '#FFFFFF'
}

class App extends React.Component {
   render() {
      return (
        <div>
          <Navbar />
          {/* <div style={{  height: '40px' }} /> */}

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/15726227_10208437774801129_7318674557753926724_n.jpg?oh=b2764c9353fb97b11aedf7ad2ede50a8&oe=5A185812" />
          </MediaQuery>

          <Section textFirst scrollId="ourstory" title="Our Story" imgSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/15781049_10211565299828651_365514324346529234_n.jpg?oh=36b217aa41f8e03b8681b046d9904e7a&oe=5A161E68">
            <p style={ textStyle }>
              We met at the EPA and dated in (poorly executed) secrecy.
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/15726227_10208437774801129_7318674557753926724_n.jpg?oh=b2764c9353fb97b11aedf7ad2ede50a8&oe=5A185812" />
          </MediaQuery>

          <Section scrollId="thewedding" title="The Wedding" imgSrc="https://i.pinimg.com/originals/01/58/3c/01583c78fe06951327d6f22886436d57.jpg">
            <p style={ textStyle }>
              We're getting married at <a href="#">Mill Creek Barn</a> in Watervliet, MI
            </p>
            <p style={ textStyle }>
              <strong>Dress Code:</strong> Dressy Casual Barn-wedding.<br />
              The wedding is outside (flats might be a good idea)
            </p>
            <p style={ textStyle }>
              <strong>Schedule of Events</strong>
              <ul>
                <li>4:00 - Ceremony Begins</li>
                <li>5:30 - Dinner</li>
                <li>7:00 - Dancing</li>
                <li>10:00 - Campfire</li>
                <li>11:00 - After Party</li>
              </ul>
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/13339669_10106579977229703_917825051353081153_n.jpg?oh=6f85a545084606ba922814cb152dd53e&oe=5A184202" />
          </MediaQuery>

          <Section textFirst scrollId="gettingthere" title="Getting There" imgSrc="https://igx.4sqi.net/img/general/600x600/N9ykAENjGwzKOjaDb7reJdIcfQ_kG2y1zOF7Tpk-DhU.jpg">
            <p style={ textStyle }>
              Flying
            </p>
            <p style={ textStyle }>
              Driving
            </p>
            <p style={ textStyle }>
              Swimming
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/1924127_10102476209637900_4439857778207234214_n.jpg?oh=3aa6552c632849a49e12cbd618a99fe7&oe=5A5DDA51" />
          </MediaQuery>

          <Section scrollId="lodging" title="Lodging" imgSrc="https://igx.4sqi.net/img/general/600x600/N9ykAENjGwzKOjaDb7reJdIcfQ_kG2y1zOF7Tpk-DhU.jpg">
            <p style={ textStyle }>
              There are many options in west Michigan. Unfortunately, this is high tourism season for Michigan, so we suggest booking early!
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/1924127_10102476209637900_4439857778207234214_n.jpg?oh=3aa6552c632849a49e12cbd618a99fe7&oe=5A5DDA51" />
          </MediaQuery>

          <Section textFirst scrollId="activities" title="Activities" imgSrc="https://i.pinimg.com/736x/14/eb/1e/14eb1ea7b1601d0c6a04df2ab4e4cc62--beach-stuff-michigan-usa.jpg">
            <p style={ textStyle }>
              Lots of things to do:
              <ul>
                <li>Breweries</li>
                <li>Water Activities</li>
                <li>Bike Riding</li>
              </ul>
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/1924127_10102476209637900_4439857778207234214_n.jpg?oh=3aa6552c632849a49e12cbd618a99fe7&oe=5A5DDA51" />
          </MediaQuery>

          <Section scrollId="registry" title="Registry" imgSrc="https://i.pinimg.com/736x/14/eb/1e/14eb1ea7b1601d0c6a04df2ab4e4cc62--beach-stuff-michigan-usa.jpg">
            <p style={ textStyle }>
              <ul>
                <li><a href="#">Amazon</a></li>
              </ul>
            </p>
          </Section>

          <Footer>
            Designed with &lt;3 by David Hawkins
          </Footer>
        </div>
      );
   }
}

export default App;
