# USE REDUCER HOOK:

### Definition:

 * useReducer is a React hook used to manage complex state 
 * useReducer works like useState, but provides a different approach to state management

### How useReducer works:
 * useReducer takes 2 parameters:
    * reducer: a function that handles the actions and updates state
    * initialState: initial value of state

 * useReducer return an array of 2 elements:
    * state: value of current state
    * dispatch: a function used to send actions to reducer 

### Syntax:
```
const [state, dispatch] = useReducer(reducer, initialState);
```

```
const reducer = (state, action) => {
  switch(action.type){
    case 'ACTION_TYPE_1':
      return {
        ...state,
        prop1: 'new value'
      };

    case 'ACTION_TYPE_2':
      return {
        ...state,
        prop2: action.payload
      };

    default:
      return state;
  }
};
```

```
dispatch({ type: 'ACTION_TYPE_1' });
dispatch({ type: 'ACTION_TYPE_2', payload: 'new value'});
```

Example:
```
import React, { useReducer } from 'react';

type CountState = {
  count: number;
}

type CountAction = {
  type: 'INCREMENT' | 'DECREMENT';
  payload?: number; 
}

const counterReducer = (state: CountState, action: CountAction): CountState => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + (action.payload || 1)
      };
    case 'DECREMENT':
      return {
        count: state.count - (action.payload || 1)
      };
    default:
      return state;
  }
};

const Counter = () => {
  const initialState: CountObject = {
    count: 0
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default Counter;
```