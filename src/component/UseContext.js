import React, { useContext } from 'react'
import { useContextHook } from '../App'

export default function UseContext() {
  const { data } = useContext(useContextHook)
  return (
    <>
      <p>This is {data}</p>
    </>
  )
}


// export default function UseContext() {
//   return (
//     <>
//       <useContextHook.Consumer>
//         {
//           data => {
//             return <p>This is {data}</p>

//           }
//         }
//       </useContextHook.Consumer>
//     </>
//   )
// }