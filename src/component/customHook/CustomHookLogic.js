import { useEffect } from 'react'

function useCustomHookLogic(counter) {

  useEffect(() => {
    document.title = `count ${counter}`
  }, [counter])
}

export default useCustomHookLogic;