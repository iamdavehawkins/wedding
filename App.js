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

          <Section textFirst scrollId="ourstory" title="Our Story" imgSrc="./img/IMG_6604_brightened.JPG">
            <p style={ textStyle }>
              The two of us met while working at the EPA in Ann Arbor.
              Immediately we had a lot in common, a passion for outdoor activities, belief in a sustainable future for our planet,
              and sharing good beer with friends. We tried to keep our relationship discrete at work. Doing silly things like staggering our
              departures from home and the office. Not making googly eyes at each other in the few meetings we shared. But we failed miserably.
              Chelsea would stop by Dave's desk multiple times per day, we'd eat lunch together pretty much every day. And when people asked
              us what we did the past weekend... or how our (coincidentally timed) vacations were... the answers were suspiciously similar.
            </p>
            <p style={ textStyle }>
              In 2016, we both found our dream jobs. Chelsea with the environmental and wastewater engineering firm CH2M, and Dave with Tesla.
              We split ways, Chelsea to Denver, and Dave to the Silicon Valley. Neither of us could in good conscience stop the other from pursuing
              these amazing opportunities so well-aligned with our passions. This was a tough year, puncuated by monthly flights back and forth,
              and continuing our adventures in Colorado and California.
            </p>
            <p style={ textStyle }>
              In late 2016 Chelsea discovered she could transfer within her company to the Bay Area, and in December, Dave (finally) proposed.
              In early 2017, we roadtripped from Denver to Oakland, and settled in our new home.
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="./img/DSC_0057.JPG" />
          </MediaQuery>

          <Section scrollId="thewedding" title="The Wedding" imgSrc="https://i.pinimg.com/originals/01/58/3c/01583c78fe06951327d6f22886436d57.jpg">
            <p style={ textStyle }>
              We're getting married at <a href="#">Mill Creek Barn</a> in Watervliet, MI
              <br />
              68770 80th Ave, Watervliet, MI 49098
            </p>
            <p style={ textStyle }>
              <strong>Dress Code:</strong> Dressy Casual Barn-wedding.<br />
            </p>
            <p style={ textStyle }>
              <strong>Schedule of Events (tentative)</strong><br />
              <ul>
                <li>4:00 - Ceremony Begins</li>
                <li>5:30 - Dinner</li>
                <li>7:00 - Dancing</li>
                <li>10:00 - Campfire</li>
                <li>11:00 - After Party</li>
              </ul>
            </p>
            <p style={ textStyle }>
              <strong>Important considerations</strong><br />
              <ul>
                <li>The wedding is outside (flats might be a good idea)</li>
                <li>Cell reception is either poor or non-existent at the venue</li>
              </ul>
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="./img/13339669_10106579977229703_917825051353081153_n.jpg" />
          </MediaQuery>

          <Section textFirst scrollId="gettingthere" title="Getting There" imgSrc="./img/IMG_5075.JPG">
            <p style={ textStyle }>
              <strong>Flying</strong><br />
              You can fly into either Chicago Airports (O'Hare/Midway) or Detroit (DTW). Both are about 2.5 hours from the venue.
            </p>
            <p style={ textStyle }>
              <strong>Driving</strong><br />
              There is plenty of parking at the venue. However, if you choose not to drive, we will be providing shuttles to
              xx and xx.
            </p>
            <p style={ textStyle }>
              <strong>Shuttle Schedule</strong><br />
              <ul>
                <li>x:xx - Depart xx</li>
                <li>x:xx - Depart venue</li>
              </ul>
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="./img/DSC_0072.JPG" />
          </MediaQuery>

          <Section scrollId="lodging" title="Lodging" imgSrc="https://igx.4sqi.net/img/general/600x600/N9ykAENjGwzKOjaDb7reJdIcfQ_kG2y1zOF7Tpk-DhU.jpg">
            <p style={ textStyle }>
              While there are many options in west Michigan, this is high tourism season, so we suggest booking as early as you can.
            </p>
            <p style={ textStyle }>
              <strong>We have reserved blocks at the following locations:</strong><br />
              <ul>
                <li>
                  <a href="http://www.marriott.com/hotels/travel/sbnwl-fairfield-inn-and-suites-watervliet-st-joseph/">
                    Fairfield Inn & Suites
                  </a>
                  - around $249/nt - Call xxx-xxxx and mention "Ransom-Hawkins Wedding"
                </li>
                <p>
                  This hotel has a huge water park and may be a good option for those with young children.
                </p>
                <li>Cabins</li>
              </ul>
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="./img/GOPR1304.JPG" />
          </MediaQuery>

          <Section textFirst scrollId="activities" title="Activities" imgSrc="./img/IMG_5624_square.JPG">
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
            <Parallax imgSrc="./img/IMG_4530.JPG" />
          </MediaQuery>

          <Section scrollId="registry" title="Registry" imgSrc="./img/IMG_3937_square.jpg">
            <p style={ textStyle }>
              <ul>
                <li><a href="#">We don't have this figured out yet.</a></li>
              </ul>
            </p>
          </Section>

          <MediaQuery minWidth={1224}>
            <Parallax imgSrc="./img/IMG_7401.JPG" />
          </MediaQuery>

          <Footer>
            Designed & coded with &lt;3 by David Hawkins
          </Footer>
        </div>
      );
   }
}

export default App;
