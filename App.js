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
          <Parallax imgSrc="./img/proposal.jpg" />
        </MediaQuery>

        <Section textFirst scrollId="ourstory" title="Our Story" imgSrc="./img/IMG_6604_brightened.JPG">
          <p style={textStyle}>
            We met trying to save the world at the EPA in Ann Arbor.
            Immediately we had a lot in common: a passion for outdoor activities, belief in a sustainable future for 
            our planet, and sharing good beer with friends. We tried to keep our relationship a secret at work for a 
            year, doing silly things like staggering our departures from happy hour and not making googly eyes at each 
            other in shared meetings. We failed miserably. During a climbing trip to the Red River Gorge, KY with a 
            friend from work, Cullen’s wife Carmen said, “Chelsea where's your tent?” Chelsea pointed to 
            a solitary tent on a hill, “Dave, where's <i>your</i> tent?” and Dave slowly lifted his arm in the same direction. 
            The secret was out. Meanwhile, back at work, Chelsea, impressed by Dave’s patience (and good looks), asked him to train her in Python,
            so she would stop by Dave's desk multiple times per day. And when people asked 
            us what we did the past weekend or how our (coincidentally timed) vacations were, the answers were suspiciously 
            similar. Eventually we began to let more and more in on the secret, easing our burden and allowing our 
            love to grow.
            </p>
          <p style={textStyle}>
            In 2016, we both found our dream jobs. Chelsea with the environmental and wastewater engineering firm CH2M, and Dave with Tesla.
              We split ways, Chelsea to Denver, and Dave to the Bay Area. Neither of us could in good conscience stop the other from pursuing
              these amazing opportunities so well-aligned with our passions. This was a tough year, puncuated by monthly flights to visit,
              and more adventures in Colorado and California.
            </p>
          <p style={textStyle}>
            In late 2016 Chelsea discovered she could transfer within her company to the Bay Area, and in December, Dave (finally) proposed.
              In early 2017, we roadtripped from Denver to Oakland, and settled in our new home.
            </p>
        </Section>

        <MediaQuery minWidth={1224}>
          <Parallax imgSrc="./img/DSC_0057.JPG" />
        </MediaQuery>

        <Section scrollId="thewedding" title="The Wedding Weekend - 7/14/18" imgSrc="https://i.pinimg.com/originals/01/58/3c/01583c78fe06951327d6f22886436d57.jpg">
          <p style={textStyle}>
            We're getting married at <a href="https://www.millcreekwilde.com/">Mill Creek Barn</a>
              <br />
            68770 80th Ave <br />
            Watervliet, MI 49098
            </p>
          <p style={textStyle}>
            <h3>Dress Code</h3> Dressy Casual Barn-wedding.<br />
          </p>
          <p style={textStyle}>
            <h3><strong>7/13 - The Day Before the Big Day</strong></h3>
            We'll be grabbing dinner and drinks at <a href="http://liverybrew.com/">The Livery Brewing Company</a> in Benton Harbor sometime around 5 or 6. Feel free to stop by and say hi.
          </p>
          <p style={textStyle}>
            <h3><strong>7/14 - The Big Day</strong></h3>
            <ul>
              <li>3:30 - Ceremony Begins</li>
              <li>4:15 - Drinks and Lawn Games</li>
              <li>6:00 - Dinner</li>
              <li>7:30 - Dancing</li>
              <li>11:00 - Music stops</li>
              <li>After party at Sweet Cherry Resorts</li>
            </ul>
          </p>
          <p style={textStyle}>
            <h3><strong>Important considerations</strong></h3>
            <ul>
              <li>We love your kids but thought you might like a night off. Adults only please! If this is not an option for you, please contact Dave or Chelsea so we can help make arrangements.</li>
              <li>The wedding is outside, so ladies your heels may sink into the grass.</li>
              <li>Cell reception is poor or non-existent at the venue, but there is a land line we can use (number TBD).</li>
            </ul>
          </p>
        </Section>

        <MediaQuery minWidth={1224}>
          <Parallax imgSrc="./img/13339669_10106579977229703_917825051353081153_n.jpg" />
        </MediaQuery>

        <Section textFirst scrollId="gettingthere" title="Getting There" imgSrc="./img/IMG_5075.JPG">
          <p style={textStyle}>
            <h3><strong>Flying</strong></h3>
            You can fly into either Chicago Airports (ORD/MDW) or Detroit (DTW). Both are about 2.5 hours from the venue.
            </p>
          <p style={textStyle}>
            <h3><strong>Driving</strong></h3>
            There is plenty of parking at the venue for those with designated drivers.
            If you choose not to drive, we are providing shuttles from the hotels and cottages we have reserved.
            Take note, there is no Uber/Lyft in the area.
            </p>
          <p style={textStyle}>
            <h3><strong>Shuttle Schedule</strong></h3>
            <p>
              Shuttles will <b>only</b> be running from Sand Castle, Sweet Cherry, and the Fairfield Inn & Suites.
            </p>
            <ul>
              <li>2:45pm - Shuttle Departs Sweet Cherry Resorts</li>
              <li>3:00pm - Shuttle Departs Sand Castle Cottages</li>
              <li>3:10pm - Shuttle Departs Fairfield Inn & Suites</li>
              <p>Wedding & Reception</p>
              <li>8:00pm - Shuttle Departs for Sweet Cherry, Sand Castle, and Fairfield</li>
              <li>9:00pm - Shuttle Departs for Sweet Cherry, Sand Castle, and Fairfield</li>
              <li>10:00pm - Shuttle Departs for Sweet Cherry, Sand Castle, and Fairfield</li>
              <li>11:00pm - Final shuttle to Fairfield Inn & Suites</li>
              <li>11:30pm - Final shuttle to Sweet Cherry and Sand Castle</li>
            </ul>
          </p>
        </Section>

        <MediaQuery minWidth={1224}>
          <Parallax imgSrc="./img/DSC_0072.JPG" />
        </MediaQuery>

        <Section scrollId="lodging" title="Lodging" imgSrc="./img/Ransom_029.jpg">
          <p style={textStyle}>
            <ul>
              <p>
              NOTE: (6/14) The hotel wedding blocks have expired.<br/>
              However, there are still a few A-frames available at Sweet Cherry Resorts, you can book at (269) 849-1233.<br/>
              Sand castle cottages also has availability and direct booking through their AirBnb listings. (<a href="https://www.sandcastlescottages.com/cottages---rates">Link</a>)<br/>
              Hotel rooms can still be booked at Fairfield Inn and Suites outside the wedding block.
              </p>
              <h3><a href="http://www.marriott.com/hotels/travel/sbnwl-fairfield-inn-and-suites-watervliet-st.-joseph/">Fairfield Inn & Suites</a></h3>
              Call 269-463-7946 and mention "Ransom-Hawkins Wedding". This hotel also has a water park if you want to bring kids and leave them behind with family/babysitter at the hotel.
              <h3><a href="https://www.facebook.com/Sweet-Cherry-Resort-113473335352259/">Sweet Cherry Resorts</a></h3>
                <ul>
                  <li>Cabins of various sizes and prices and camping</li>
                  <li>Two night minimum</li>
                  <li>Likely site for after party</li>
                  <li>Property is reserved and opens for booking April 20th</li>
                  <li>If you'd like to stay here please email <a href="mailto:chelsea.ransom@gmail.com?Subject=Sand%20Castle%20Cottages">Chelsea</a> or <a href="mailto:iamdavehawkins@gmail.com?Subject=Sand%20Castle%20Cottages">Dave</a> with your preferred cottage or if you'd like to camp</li>
                </ul>
              <h3><a href="http://www.sandcastlescottages.com">Sand Castle Cottages</a></h3>
                <ul>
                  <li>Cabins of various sizes and prices</li>
                  <li>Two night minimum</li>
                  {/* <li>15 minute walk to the Sweet Cherry Resorts</li> */}
                  <li>Arrange through us, please email <a href="mailto:chelsea.ransom@gmail.com?Subject=Sand%20Castle%20Cottages">Chelsea</a> or <a href="mailto:iamdavehawkins@gmail.com?Subject=Sand%20Castle%20Cottages">Dave</a> with your preferred cottage</li>
                </ul>
              <h3>If you prefer, there are other nearby hotels that we recommend, but couldn't get blocks at.
                  Note that no shuttles will be running to these locations.</h3>
                <ul>
                  <li>SpringHill Suites Benton Harbor St. Joseph</li>
                  <li>Best Western Benton Harbor St. Joseph</li>
                  <li>Hilton Garden Inn Benton Harbor St. Joseph</li>
                  <li>Staybridge Suites Benton Harbor St. Joseph</li>
                  <li>Holiday Inn Express & Suites Benton Harbor</li>
                </ul>
            </ul>
          </p>
        </Section>

        <MediaQuery minWidth={1224}>
          <Parallax imgSrc="./img/GOPR1304.JPG" />
        </MediaQuery>

        <Section textFirst scrollId="activities" title="Activities & Map" imgSrc="./img/IMG_5624_square.JPG">
          <p style={textStyle}>
            <h3>We decided to get married in western Michigan because it's a beautiful place and there is lots to do!</h3>
            <ul>
              <li>Visit Lake Michigan - it looks like the ocean but is warm and FRESH</li>
              <li>Bike Rentals</li>
              <li>Breweries</li>
                <ul>
                  <li>Arclight Brewing Company - Watervliet</li>
                  <li>The Livery - Benton Harbor</li>
                  <li>Bells Brewery - Kalamazoo</li>
                </ul>
            </ul>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DHYJVag9LwAzLL2_y9a0UPTe0MFzg_qq" width="640" height="480"></iframe>
          </p>
        </Section>

        <MediaQuery minWidth={1224}>
          <Parallax imgSrc="./img/IMG_4530.JPG" />
        </MediaQuery>

        <Section scrollId="registry" title="Registry" imgSrc="./img/IMG_3937_square.jpg">
          <p style={textStyle}>
            <ul>
              <p>
                Having combined two independent households into one (twice!), we are very fortunate to live together in a home full of many things. The two of us share a love of experiences and would feel profound gratefulness for any contributions to our Patagonia honeymoon fund or our (King + Puppy) bed fund.
              </p>
              <p>
                These can be given in cash or check at our wedding or via Venmo to @iamdavehawkins.
              </p>
              <p>
                If you feel like you'd like to buy us something, we've thought of a few things that would cheer up our home and encourage some of our favorite hobbies and vices 🙂 <a href="https://www.amazon.com/wedding/david-hawkins-chelsea-ransom-watervliet-july-2018/registry/3EYKX5LKGFN87">These are listed on our Amazon registry</a>. Please be sure to have any physical items shipped to our Oakland address! Thank you!!
              </p>
              <p>
                Chelsea Ransom & Dave Hawkins<br />
                308 Jackson St. Apt 307<br />
                Oakland, CA 94607
              </p>
            </ul>
          </p>
        </Section>

        <MediaQuery minWidth={1224}>
          <Parallax imgSrc="./img/Ransom_044.jpg" />
        </MediaQuery>

        <Footer>
          Designed & <a href="https://github.com/iamdavehawkins/wedding" target="_blank">coded</a> with &lt;3 by David Hawkins
        </Footer>
      </div>
    );
  }
}

export default App;
