import { useEffect, useState } from 'react'

function useCustomHookLogic() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(preCounter => preCounter - 1);
  }

  const reset = () => {
    setCounter(0);
  }
  useEffect(() => {
    document.title = `count ${counter}`
  }, [counter]);

  return [counter, increment, decrement, reset];

}

export default useCustomHookLogic;