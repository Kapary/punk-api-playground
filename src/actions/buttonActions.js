export const incrementCounter = () => dispatch => {
    dispatch({
        type: 'incrementCounter',
        payload: 'boczek+'
    });
}

export const decrementCounter = () => dispatch => {
    dispatch({
        type: 'decrementCounter',
        payload: 'boczek-'
    });
}