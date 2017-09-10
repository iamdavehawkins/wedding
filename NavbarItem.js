import React from 'react';
import ReactDOM from 'react-dom';

var liStyle = {
  // display: 'inline',
  listStyle: 'none',
  textAlign: 'center',
  flexGrow: 1,
  flexBasis: '10%',
  textDecoration: 'none',
  color: '#000',
  textShadow: '1px 1px #000',
  padding: '10px',
  fontSize: '18px'
};

class navbarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({
        hover: !this.state.hover
    });
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {color: '#ff7f50'}
    } else {
      linkStyle = {color: '#ffffff'}
    };

    return (
      <a style={ Object.assign({}, liStyle, linkStyle) } href={"#" + this.props.idlink} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {this.props.text}
      </a>
    );
  }
}

export default navbarItem;
