import { configureStore } from '@reduxjs/toolkit';
import { RootState } from './types'; // Import the RootState type

const initialState: RootState = {
  data: {
    data: null,
  },
};

function reducer(state = initialState, action: any) {
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
