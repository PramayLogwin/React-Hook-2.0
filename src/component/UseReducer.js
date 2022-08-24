import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {

  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}


export default function UseReducer() {

  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Counter : {counter.firstCounter} </div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}
