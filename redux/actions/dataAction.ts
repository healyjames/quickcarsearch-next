interface Data {
  make: string
  model: string
  avg_price: string
}

// Action interfaces
export interface DataAction {
  type: 'SET_DATA'
  payload: Data[]
}
