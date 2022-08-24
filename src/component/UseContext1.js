import React from 'react';
import { useContextHook } from '../App';

export default function UseContext1() {

  return (
    <>
      <useContextHook.Consumer>
        {
            data => {
              return <p> This is {data}</p>
            }
        }
      </useContextHook.Consumer>
    </>
  )
}
