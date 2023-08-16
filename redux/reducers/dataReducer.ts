import { DataAction } from '../actions/dataAction'
import { DataState, Cars } from '../types'

const initialState: DataState = {
  data: null,
}

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

export function setData(data: Cars[]): DataAction {
  return {
    type: 'SET_DATA',
    payload: data,
  }
}

export default dataReducer
