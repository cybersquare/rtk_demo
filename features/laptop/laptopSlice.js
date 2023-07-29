const createSlice = require('@reduxjs/toolkit').createSlice

initialState = {
    numOfLaptops: 10
}

// Define function with parameters
// 1. An object with name and initialState
// 2. Reducers
const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    // Reducers
    reducers:{
        ordered: (state)=>{
            state.numOfLaptops--
        },
        restocked:(state, action)=>{
            state.numOfLaptops += action.payload
        }
    }
}) 
// createSlice will automatically create action creators with 
// same name of reducer functions we have created.

// Export reducers and actions
module.exports = laptopSlice.reducer // Default export
module.exports.laptopActions = laptopSlice.actions // Named export