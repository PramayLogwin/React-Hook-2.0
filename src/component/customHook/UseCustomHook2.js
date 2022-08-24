import React from 'react'
import useCustomHookLogic from './CustomHookLogic';

export default function UseCustomHook2() {

  const [counter, increment, decrement, reset] = useCustomHookLogic();


  return (
    <>
      <p>Counter Two : {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment </button>
      <button onClick={reset}>Reset</button>
    </>
  )
}
