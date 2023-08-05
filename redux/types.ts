export interface Cars {
    make: string
    model: string
    avg_price: number
    // Add more properties as needed
}
  
export interface DataState {
    data: Cars[] | null
}
  
export interface RootState {
    data: DataState
    budget: string
}
  