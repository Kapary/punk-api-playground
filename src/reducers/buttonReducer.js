const initState = {
    currentCount: 0,
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'incrementCounter':
            return {
                currentCount: state.currentCount + 1,
                lastAction: action.payload
            };
        case 'decrementCounter':
            return {
                currentCount: state.currentCount - 1,
                lastAction: action.payload
            };
        default:
            return state;
    }
}