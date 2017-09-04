import React from 'react';

class Parallax extends React.Component {
  render() {

    var parallaxDivStyle = {
      width: '100%',
      margin: '0px 0px 0px 0px',
      // height: '350px',
      minHeight: '500px',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: "url(" + this.props.imgSrc + ")"
    }

    return (
      <div style={ parallaxDivStyle } />
    );
  }
}

export default Parallax;
