import { configureStore, combineReducers } from '@reduxjs/toolkit'
import budgetReducer from './reducers/budgetReducer'
import dataReducer from './reducers/dataReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    data: dataReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store
