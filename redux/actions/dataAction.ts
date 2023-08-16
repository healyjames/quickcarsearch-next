interface Data {
  make: string
  model: string
  avg_price: string
  model_year: number
  bhp: number
  torque: number 
  acceleration: string
}

// Action interfaces
export interface DataAction {
  type: 'SET_DATA'
  payload: Data[]
}
