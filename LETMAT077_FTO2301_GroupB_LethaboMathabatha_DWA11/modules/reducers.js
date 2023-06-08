export const initialState = {
    counter: 0,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + action.payload,
        };
      case 'DECREMENT':
        return {
          ...state,
          counter: state.counter - action.payload,
        };
      case 'UPDATE_MESSAGE':
        return {
          ...state,
          message: action.payload,
        };
      default:
        return state;
    }
  };
  