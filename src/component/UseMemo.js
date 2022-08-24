import React, { useMemo, useState } from 'react'

export default function UseMemo() {

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(10);

  const setNewCountOne = () => {
    setCountOne(countOne + 1)
  }
  const setNewCountTwo = () => {
    setCountTwo(countTwo + 1)
  }


  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return countOne % 2 === 0
  },[countOne])

  return (
    <>
      <button onClick={setNewCountOne}>counter One : {countOne} </button>
      <p>{isEven ? "even" : "odd"}</p>
      <button onClick={setNewCountTwo}>counter Two : {countTwo}</button>
    </>
  )
}
