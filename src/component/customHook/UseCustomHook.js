import React, { useState } from 'react'
import useCustomHookLogic from './CustomHookLogic';
import UseCustomHook2 from './UseCustomHook2';

export default function UseCustomHook() {

  const [counter, setCounter] = useState(0);


  useCustomHookLogic(counter);
  return (
    <>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click Here</button>
      <UseCustomHook2 />
    </>
  )
}
