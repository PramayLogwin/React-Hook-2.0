import React, { useEffect, useState } from 'react'

export default function UseCallback() {

  const [age, setAge] = useState(0);
  const [counter, setCounter] = useState(0);

  const setNewAge = () => {
    setAge(age + 1);
    console.log("age render");
  }
  return (
    <>
      <div>
        Age : {age}
      </div>
      <button onClick={setNewAge}>Click</button>
      <div>
        Counter : {counter}
      </div>
      {/* <button onClick={setNewCounter}>Click</button> */}
    </>
  )
}
