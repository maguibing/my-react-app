const Reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, count: action.payload + state.count};
        case "decrement":
            return {...state, count: action.payload - state.count};
        default:
            return state
    }
}

export default Reducer
