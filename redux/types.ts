export interface Cars {
    make: string
    model: string
    avg_price: string
    // Add more properties as needed
}
  
export interface DataState {
    data: Cars[] | null
}

export interface BudgetStore {
    budget: string
}
  
export interface RootState {
    data: DataState
    budget: BudgetStore
}
  