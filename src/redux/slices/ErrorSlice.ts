import {createSlice} from '@reduxjs/toolkit';
export const HTTP_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const ErrorSlice = createSlice({
  name: 'error',
  initialState: {
    httpStatus: HTTP_STATUS.IDLE,
    hideWifiWarnings: false,
    data: {
      code: -1,
      internal: -1,
      description: null,
    },
    code: null,
  },
  reducers: {
    startLoading: state => {
      state.httpStatus = HTTP_STATUS.LOADING;
    },
    stopLoading: state => {
      state.httpStatus = HTTP_STATUS.IDLE;
    },
    showSuccess: state => {
      state.httpStatus = HTTP_STATUS.SUCCESS;
    },
    showCode: (state, code) => {
      state.code = code.payload;
    },
    showError: (state, error) => {
      state.httpStatus = HTTP_STATUS.ERROR;
      if (error.payload.code === 'ECONNABORTED') {
        state.data.code = 408;
      } else {
        try {
          console.log('en showError ', error.payload.response.data);
          console.log('showError status', error.payload.response.status);
          state.data.code = error.payload.response.status;
          state.data.internal = error.payload.response.data.numError;
          state.data.description = error.payload.response.data.error;
          state.code = error.payload.response.data.code;
        } catch (error) {
          state.data.code = 999;
        }
      }
    },
    clean: state => {
      state.httpStatus = HTTP_STATUS.IDLE;
      state.data.code = -1;
      state.data.internal = -1;
      state.data.description = null;
      state.hideWifiWarnings = false;
    },
    hideWifiWarnings: state => {
      state.hideWifiWarnings = true;
    },
    restoreWifiWarnings: state => {
      state.hideWifiWarnings = false;
    },
  },
});

export const {
  startLoading,
  stopLoading,
  showSuccess,
  showError,
  showCode,
  clean,
  hideWifiWarnings,
  restoreWifiWarnings,
} = ErrorSlice.actions;

export default ErrorSlice.reducer;
