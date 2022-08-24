import React, { useState } from 'react'
import useCustomHookLogic from './CustomHookLogic';

export default function UseCustomHook2() {

  const [counter, setCounter] = useState(0);


  useCustomHookLogic(counter);
  return (
    <>
      <p>Counter Two : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click Here</button>
    </>
  )
}
