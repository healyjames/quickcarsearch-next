export interface Car {
    make: string
    model: string
    avg_price: number
    // Add more properties as needed
}
  
export interface DataState {
    data: Car[] | null
}
  
export interface RootState {
    data: DataState
    budget: string
}
  