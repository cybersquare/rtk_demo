// const configureStore = require("@reduxjs/toolkit").configureStore
// const laptopReducer = require("../features/laptop/laptopSlice")

// // Create a store
// const store = configureStore({
//     reducer: {
//         laptop: laptopReducer 
//     },
// })

// module.exports = store


const configureStore = require("@reduxjs/toolkit").configureStore
const laptopReducer = require("../features/laptop/laptopSlice")
const userReducer = require('../features/user/userSlice')

const store = configureStore({
    reducer: {
        laptop: laptopReducer,
        user: userReducer
    }
})

module.exports = store