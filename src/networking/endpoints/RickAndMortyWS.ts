import api from '../api';
import axios from 'axios';

const RickAndMortyWS = {
  getCharacters: async function () {
    return await api.get('/character');
  },
  getCharacter: async function ({id}) {
    return await api.get(`/character/${id}`);
  },
  getLocation: async function ({url}) {
    return await axios.get(url);
  },
  getEpisode: async function ({url}) {
    return await axios.get(url);
  },
  getNextPage: async function ({url}) {
    return await axios.get(url);
  },
  getCharactersForName: async function ({name}) {
    return await api.get(`/character/?name=${name}`);
  },
};

export default RickAndMortyWS;
