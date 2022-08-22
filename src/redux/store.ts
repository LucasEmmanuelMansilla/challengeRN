import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ErrorSlice from './slices/ErrorSlice';
import UserSlice from './slices/UserSlice';
import RickAndMortySlice from './slices/RickAndMortySlice';

const reducers = combineReducers({
  error: ErrorSlice,
  user: UserSlice,
  rickAndMorty: RickAndMortySlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'socket'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
  ],
});
