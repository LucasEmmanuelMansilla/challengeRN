import React, {Component} from 'react';
import LandingUI from './LandingUI';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

import NavigationConstant from '../../../navigation/NavigationConstant';
import {
  getIndividualCharacter,
  getCharacterForName,
  getCharacters,
  getNextPageCharacters,
} from '../../../redux/slices/RickAndMortySlice';

const mapStateToProps = (state: any) => {
  return {
    characters: state.rickAndMorty.characters,
    filterCharacters: state.rickAndMorty.filterCharacters,
  };
};

const mapDispatchToProps = {
  getCharacters,
  getIndividualCharacter,
  getCharacterForName,
  getNextPageCharacters,
};

class Landing extends Component {
  state = {
    filterCharacters: [],
    visible: true,
  };
  async componentDidMount() {
    await this.props.getCharacters({});
    this.handleSetCharacters();
  }
  private _handleIndividualCharacter = async (id: string) => {
    const response = await this.props.getIndividualCharacter({
      id,
    });
    if (response.meta.requestStatus === 'fulfilled') {
      this.props.navigation.push(
        NavigationConstant.LANDING_STACK.INDIVIDUAL_CHARACTER,
      );
    }
  };

  private handleSetCharacters = () => {
    this.setState({
      ...this.state,
      filterCharacters: this.props.characters.results,
      visible: true,
    });
  };

  private handleCaptureName = async (name: string) => {
    if (name === '') {
      this.handleSetCharacters();
    } else {
      const response = await this.props.getCharacterForName({name});
      this.setState({
        ...this.state,
        filterCharacters: response.payload.results,
        visible: false,
      });
    }
  };

  private handleNextAndPrevPage = async (url: string) => {
    await this.props.getNextPageCharacters({url});
    this.handleSetCharacters();
  };
  render() {
    return (
      <LandingUI
        characters={this.state.filterCharacters}
        handleIndividualCharacter={this._handleIndividualCharacter}
        handleCaptureName={this.handleCaptureName}
        handleNextAndPrevPage={this.handleNextAndPrevPage}
        info={this.props.characters.info}
        visible={this.state.visible}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
