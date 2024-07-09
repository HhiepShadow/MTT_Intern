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