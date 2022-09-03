const initState = [
    {id: 1, text: '吃饭', done: true},
    {id: 2, text: '学习', done: false},
    {id: 3, text: '睡觉', done: true}
]


const todos = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default todos
