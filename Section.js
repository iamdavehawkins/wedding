import React from 'react';

const sectionContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  margin: '10px 10px',
  backgroundColor: '#4A64B0',
  // paddingTop: '50px'
}

const imageStyle = {
  order: 0,
  padding: '10px 10px 10px 10px',
}

const titleStyle = {
  textAlign: 'center',
  color: '#ff7f50',
  fontSize: '24px',
  textShadow: '1px 1px #000'
}

const dummyDivStyle = {
  position: 'relative',
  width: 0,
  height: 0,
  zIndex: -1,
  // top: '-50%',
  marginTop: '-4%',
  left: 0,
  visibility: 'hidden'
}

class Section extends React.Component {
  render() {
    return (
      <div style={ sectionContainerStyle } >
        <div style={ dummyDivStyle } id = { this.props.scrollId } />
        <div className={(this.props.textFirst ? 'textFirst' : 'textSecond')} >
          <h3 style={ titleStyle }>
            { this.props.title }
          </h3>
          { this.props.children }
        </div>
        <div style={ imageStyle }>
          <img width="350px" height="350px" src={ this.props.imgSrc } />
        </div>
      </div>
    );
  }
}

export default Section;
