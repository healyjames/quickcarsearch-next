export interface Cars {
    make: string
    model: string
    avg_price: string
    variant?: string
    model_year: number
    bhp: number
    torque: number
    acceleration: string
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
  