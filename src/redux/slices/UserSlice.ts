import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    loggedUser: {},
  },
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    logout: state => {
      state.loggedUser = {};
    },
  },
});

export const {setLoggedUser, logout} = UserSlice.actions;

export default UserSlice.reducer;
