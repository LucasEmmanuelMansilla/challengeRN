import React, {Component} from 'react';
import {connect} from 'react-redux';
import LocationUI from './LocationUI';

const mapStateToProps = (state: any) => {
  return {
    location: state.rickAndMorty.location,
  };
};

class Location extends Component {
  render() {
    return <LocationUI location={this.props.location} />;
  }
}

export default connect(mapStateToProps)(Location);
