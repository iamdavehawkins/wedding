import React from 'react';

const sectionContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  margin: '10px 0 10px 0',
  backgroundColor: '#CC0C0F'
}

const textStyle = {
  padding: '0 50px 0 50px'
}

const imageStyle = {
  order: 0,
  padding: '10px 10px 10px 10px'
}

class Section extends React.Component {
  render() {

    return (
      <div style={ sectionContainerStyle } id={ this.props.scrollId }>
        <div className={(this.props.textFirst ? 'textFirst' : 'textSecond')} >
          <p style={ textStyle }>
            Lorem ipsum dolor sit amet, nec ea omnes commodo consequat, aperiam theophrastus usu at. Et mea putent volumus voluptua, quod inani postulant et sea. Est at case augue reformidans. Mea ut munere legimus meliore, pro ad adhuc imperdiet. Eu augue libris probatus mel, impedit veritus te qui. Vel aperiam maluisset conclusionemque ei, illud delicata voluptatum his at. Quo id possim eripuit, sed ei summo timeam.
          </p>
        </div>
        <div style={ imageStyle }>
          <img width="350px" height="350px" src='http://bit.ly/2xCw5mU' />
        </div>
      </div>
    );
  }
}

export default Section;
