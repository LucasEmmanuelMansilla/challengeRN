import React, {Component} from 'react';
import {connect} from 'react-redux';
import IndividualCharacterUI from './IndividualCharacterUI';
import {getEpisode, getLocation} from '../../../redux/slices/RickAndMortySlice';
import NavigationConstant from '../../../navigation/NavigationConstant';

const mapStateToProps = (state: any) => {
  return {
    character: state.rickAndMorty.character,
  };
};

const mapDispatchToProps = {getEpisode, getLocation};

class IndividualCharacter extends Component {
  private _handleGetEpisode = async (url: string) => {
    const response = await this.props.getEpisode({url});
    return response.payload;
  };
  private handleGetLocation = async (url: string) => {
    const response = await this.props.getLocation({url});
    if (response.meta.requestStatus === 'fulfilled') {
      this.props.navigation.push(NavigationConstant.LANDING_STACK.LOCATION);
    }
  };
  render() {
    return (
      <IndividualCharacterUI
        handleGetEpisode={this._handleGetEpisode}
        character={this.props.character}
        handleGetLocation={this.handleGetLocation}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndividualCharacter);
