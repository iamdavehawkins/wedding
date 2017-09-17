import React from 'react';

const footerStyle = {
  height: '10px',
  fontSize: '12',
  textAlign: 'right'
}

class Footer extends React.Component {
  render() {

    return (
      <div style={ footerStyle }>
        { this.props.children }
      </div>
    );
  }
}

export default Footer;
