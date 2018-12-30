import React, { Component } from 'react';

class Left extends Component {
  render() {
    const style = {
      height: '80px',
      width: '80px'
    };
    return (
      <div className="d-flex align-items-center">
        <div>
          <img src={this.props.image} alt={this.props.image} style={style} />
        </div>
        <div className="ml-2">
          <h6 className="mb-0">{this.props.name}</h6>
          <small>{this.props.artist} </small>
        </div>
      </div>
    );
  }
}

export default Left;
