const store = require("./app/store")
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log("IntialState", store.getState())

const unsubscribe = store.subscribe(()=>{// Listen to changes
    console.log("Updated state ", store.getState())
})
store.dispatch(fetchUsers())
