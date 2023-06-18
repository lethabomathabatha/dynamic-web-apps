export const createCountStore = (reducer, initialState) => {
    let state = initialState;
    const countListeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      const prevState = state; // Store previous state
      state = reducer(state, action);
      if (state !== prevState) { // Check if state has changed
        countListeners.forEach((listener) => listener(state));
      }
    };
  
    const subscribe = (listener) => {
      countListeners.push(listener);
  
      return () => {
        const index = countListeners.indexOf(listener);
        if (index !== -1) {
          countListeners.splice(index, 1);
        }
      };
    };
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  };
  