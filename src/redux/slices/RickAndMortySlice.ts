import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {startLoading, showError, showSuccess} from './ErrorSlice';
import RickAndMortyWS from '../../networking/endpoints/RickAndMortyWS';

export const getCharacters = createAsyncThunk(
  'RickAndMorty/getCharacters',
  async ({}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await RickAndMortyWS.getCharacters();

      dispatch(showSuccess());
      return response.data;
    } catch (error) {
      console.log('error get characters: ', JSON.stringify(error, null, 2));
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const getIndividualCharacter = createAsyncThunk(
  'RickAndMorty/getIndividualCharacter',
  async ({id}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await RickAndMortyWS.getCharacter({id});

      dispatch(showSuccess());
      return response.data;
    } catch (error) {
      console.log('error get characters: ', JSON.stringify(error, null, 2));
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const getEpisode = createAsyncThunk(
  'RickAndMorty/getEpisode',
  async ({url}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await RickAndMortyWS.getEpisode({url});
      dispatch(showSuccess());
      return response.data;
    } catch (error) {
      console.log('error get characters: ', JSON.stringify(error, null, 2));
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const getLocation = createAsyncThunk(
  'RickAndMorty/getLocation',
  async ({url}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await RickAndMortyWS.getLocation({url});
      dispatch(showSuccess());
      return response.data;
    } catch (error) {
      console.log('error get characters: ', JSON.stringify(error, null, 2));
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const getCharacterForName = createAsyncThunk(
  'RickAndMorty/getCharacterForName',
  async ({name}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await RickAndMortyWS.getCharactersForName({name});
      dispatch(showSuccess());
      return response.data;
    } catch (error) {
      console.log('error get characters: ', JSON.stringify(error, null, 2));
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);
export const getNextPageCharacters = createAsyncThunk(
  'RickAndMorty/getNextPageCharacters',
  async ({url}, {rejectWithValue, dispatch}) => {
    try {
      dispatch(startLoading());
      const response = await RickAndMortyWS.getNextPage({url});
      dispatch(showSuccess());
      return response.data;
    } catch (error) {
      console.log('error get characters: ', JSON.stringify(error, null, 2));
      dispatch(showError(error));
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);

const RickAndMortySlice = createSlice({
  name: 'chat',
  initialState: {
    characters: {},
    character: {},
    location: {},
    filterCharacters: {},
  },
  reducers: {},
  extraReducers: {
    [getCharacters.pending]: (state: any) => {
      state.status = 'loading';
    },
    [getCharacters.fulfilled]: (state, {payload}) => {
      state.characters = payload;
    },
    [getCharacters.rejected]: (state: any) => {
      state.status = 'failed';
    },
    [getIndividualCharacter.pending]: (state: any) => {
      state.status = 'loading';
    },
    [getIndividualCharacter.fulfilled]: (state, {payload}) => {
      state.character = payload;
    },
    [getIndividualCharacter.rejected]: (state: any) => {
      state.status = 'failed';
    },
    [getLocation.pending]: (state: any) => {
      state.status = 'loading';
    },
    [getLocation.fulfilled]: (state, {payload}) => {
      state.location = payload;
    },
    [getLocation.rejected]: (state: any) => {
      state.status = 'failed';
    },
    [getCharacterForName.pending]: (state: any) => {
      state.status = 'loading';
    },
    [getCharacterForName.fulfilled]: (state, {payload}) => {
      state.filterCharacters = payload;
    },
    [getCharacterForName.rejected]: (state: any) => {
      state.status = 'failed';
    },
    [getNextPageCharacters.pending]: (state: any) => {
      state.status = 'loading';
    },
    [getNextPageCharacters.fulfilled]: (state, {payload}) => {
      state.characters = payload;
    },
    [getNextPageCharacters.rejected]: (state: any) => {
      state.status = 'failed';
    },
  },
});

export default RickAndMortySlice.reducer;
