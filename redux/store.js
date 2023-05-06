import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    data: reducer,
  },
});

export default store;