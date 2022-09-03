const initState = {
    count: 1
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "increment":
            return {...state, count: action.payload + state.count};
        default:
            return state
    }
}

export default Reducer
