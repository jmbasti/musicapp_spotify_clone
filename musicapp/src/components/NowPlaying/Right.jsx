import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMuteButton } from '../../actions/index';

class Right extends Component {
  //
  toggleButton = () => {
    this.props.toggleMuteButton();
  };
  //
  render() {
    return (
      <div className="d-flex align-items-center">
        <div>
          {!this.props.ui.mute ? (
            <i className="fas fa-volume-up" onClick={this.toggleButton} />
          ) : (
            <i className="fas fa-volume-mute" onClick={this.toggleButton} />
          )}
        </div>
        <div
          className="progress mx-3"
          style={{ height: '0.25rem', width: '100%' }}
        >
          <div
            style={{ width: '10%' }}
            className="progress-bar"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ui: state.ui };
};
export default connect(
  mapStateToProps,
  { toggleMuteButton }
)(Right);
