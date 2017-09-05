import React from 'react';

const sectionContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '10px 10px',
  backgroundColor: '#4A64B0',
  // paddingTop: '50px'
}

const textStyle = {
  padding: '0 50px 0 50px',
  color: '#FFFFFF'
}

const imageStyle = {
  order: 0,
  padding: '10px 10px 10px 10px',
}

const titleStyle = {
  textAlign: 'center',
  color: '#ff7f50'
}

const dummyDivStyle = {
  position: 'relative',
  width: 0,
  height: 0,
  zIndex: -1,
  // top: '-50%',
  marginTop: '-35%',
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
          <p style={ textStyle }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat erat id sem suscipit, eu rhoncus dui pulvinar. Cras arcu dolor, congue non sollicitudin a, lobortis pulvinar odio. Suspendisse volutpat ut magna in condimentum. Nulla tortor lacus, volutpat sit amet iaculis et, viverra sed magna. Donec sodales ligula et augue dapibus, ac faucibus erat maximus. Donec luctus auctor mi, a finibus justo tempor non. Suspendisse ut sollicitudin metus, ut commodo orci. Nullam id neque et lorem lobortis aliquet. Integer condimentum ligula id dui luctus rhoncus.
          </p>
          <p style={ textStyle }>
          Maecenas non risus at felis bibendum feugiat nec sed dolor. Morbi sagittis arcu ac sem sagittis bibendum ut vitae nunc. Morbi vitae placerat velit. Quisque metus diam, porttitor at posuere vel, pellentesque eget lectus. Nullam venenatis et erat quis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur non rutrum velit. Donec efficitur, turpis in venenatis accumsan, dui est volutpat neque, ac posuere diam urna hendrerit justo. Duis et lorem vitae sem imperdiet ornare.
          </p>
          <p style={ textStyle }>
          Curabitur tincidunt nisi vel diam blandit scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi convallis laoreet tortor a consectetur. Praesent vitae feugiat nulla. Proin gravida pellentesque leo a auctor. Praesent vel sapien leo. Pellentesque enim urna, sodales a lobortis nec, pharetra at diam. Nullam bibendum felis velit, id laoreet lorem efficitur vel. Cras luctus dictum nibh, vitae sagittis est fermentum eu. Etiam mauris quam, gravida nec elit sit amet, ullamcorper mollis eros. Nulla facilisi. Vivamus diam dui, tincidunt id mi vel, luctus suscipit ante. Phasellus erat massa, elementum ac efficitur in, cursus eu metus. Etiam ligula turpis, volutpat ut cursus nec, laoreet vel libero.
          </p>
        </div>
        <div style={ imageStyle }>
          <img width="350px" height="350px" src={ this.props.imgSrc } />
        </div>
      </div>
    );
  }
}

export default Section;
