import { Dispatch } from 'redux';

interface Data {
  make: string;
  model: string;
  avg_price: number;
}

// Action types
export const SET_DATA = 'SET_DATA';

// Action interfaces
interface SetDataAction {
  type: typeof SET_DATA;
  payload: Data[]; // Specify the payload type based on your data structure
}

export type ActionTypes = SetDataAction;

// Initial state
interface DataState {
  data: Data[] | null;
}

const initialState: DataState = {
  data: null,
};

// Reducer
const dataReducer = (state = initialState, action: ActionTypes): DataState => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Action creator
export function fetchData(data: Data[]): (dispatch: Dispatch<ActionTypes>) => void {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({
      type: SET_DATA,
      payload: data,
    });
  };
}

export default dataReducer;
