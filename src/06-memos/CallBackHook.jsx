import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {

    const [counter, setCounter] = useState(10)


     const incrementFather =  useCallback(
      (value) => {
        setCounter((counte) => counte + value)
      },
      [],
    )

    useEffect(() => {
        // incrementFather()
    }, [incrementFather])
    
    

    // const incrementFather = () => {
    //     setCounter(counter +1 )
    // }

  return (
    <>
        <h1>useCallBack hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>

    </>
  )
}

export default CallBackHook
