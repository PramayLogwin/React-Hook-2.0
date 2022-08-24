import React, { useState } from 'react'

function UseState() {

  const [item, setItem] = useState([]);

  const addMore = () => {
    setItem([...item, {
      id: item.length,
      value: Math.random(),
    }])
  }

  const remove = (id) => {
    setItem((remove) => {
      return remove.pop((item) => {
        return (item.id !== id);
      
      })
    })
    console.log(id)
  }


  return (
    <>
      <button onClick={()=>addMore(item.id)}>Add </button>
      <button onClick={remove}>Remove </button>
      <ul>
        {item.map(item => (<li key={item.id}>{item.value}</li>))}
      </ul>
    </>
  )
}

export default UseState

//obect as value
// import React, { useState } from 'react'

// export default function UseState() {

//   const [name, setName] = useState({ firstName: " ", lastName: " " });
//   return (
//     <>
//       First Name : <input type="text" value={name.firstName} onChange={e => setName({ ...name ,firstName: e.target.value })}></input><br />
//       Last Name : <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value })}></input><br />

//       Your Last Name : {name.firstName + " " + name.lastName}
//     </>
//   )
// }
