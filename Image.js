import React from 'react';
import ReactDOM from 'react-dom';

var imgStyle = {
  flexGrow: 1
};

class Image extends React.Component {
  render() {
    return (
      <img style={ imgStyle } src={ this.props.src } height={ this.props.height }/>
    );
  }
}

export default Image;
