import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BudgetState {
    budget: string;
}

const initialState: BudgetState = {
    budget: '',
};

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setBudget: (state, action: PayloadAction<string>) => {
            state.budget = action.payload;
        },
    },
});

export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
