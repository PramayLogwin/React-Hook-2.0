import React, { createContext, useState } from 'react'
import UseCustomHook from './component/customHook/UseCustomHook';
// import UseRef from './component/UseRef';
// import UseMemo from './component/UseMemo';
// import UseCallback from './component/UseCallback';
// import UseReducer from './component/UseReducer';
// import UseContext from './component/UseContext';
// import UseEffects from './component/UseEffect'
// import UseState from './component/UseState'
// import Header from './Header';


export const useContextHook = createContext();

export default function App() {

  // const [text, setText] = useState({
  //   id:1,
  //   name:"hello"
  // })

  return (
    <>
      {/* <useContextHook.Provider value={{data:text.id + text.name}}> */}
      {/* <useContextHook.Provider value={"Hello This Is Context Hook"}> */}
        {/* <UseContext /> */}
        {/* <UseReducer/> */}
        {/* <UseCallback/> */}
        {/* <UseMemo/> */}
        {/* <UseRef/> */}
        <UseCustomHook/>
      {/* </useContextHook.Provider> */}

    </>
  )
}
