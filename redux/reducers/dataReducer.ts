import { Dispatch } from 'redux'
import { DataAction } from '../actions/dataAction'
import { DataState, Cars } from '../types'

// Initial state
const initialState: DataState = {
  data: null,
}

// Reducer
const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

// Action creator
export function fetchData(data: Cars[]): (dispatch: Dispatch<DataAction>) => void {
  return async (dispatch: Dispatch<DataAction>) => {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    })
  }
}

export default dataReducer
