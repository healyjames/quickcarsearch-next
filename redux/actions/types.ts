// Action types
export const SET_DATA = 'SET_DATA';

// Action interfaces
interface SetDataAction {
type: typeof SET_DATA;
payload: Data[]; // Specify the payload type based on your data structure
}