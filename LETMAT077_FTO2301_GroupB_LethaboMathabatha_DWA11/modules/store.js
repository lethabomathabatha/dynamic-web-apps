// creates the redux store

export const createCountStore = (reducer, initialState) => {
    let state = initialState;
    const countListeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        countListeners.forEach((listener) => listener());
    };


const subscribe = (listener) => {
    countListeners.push(listener);

    return () => {
        const index = countListeners.indexOf(listener);
        if (index !== -1) {
            countListeners.splice(index, 1);
        }
    }
}

    return {
        getState,
        dispatch,
        subscribe,
    }
};