import React from 'react'
import { useCounter } from '../hooks'
import Small from './Small'

const Memorize = () => {

    const {counter, increment} = useCounter(10)


  return (
    <>
    
        <h1>Counter  <Small value={counter}/></h1>
        <hr />

        <button
            className='btn btn-primary'
            onClick={ () => increment()}>
            +1
        </button>
    
    </>
  )
}

export default Memorize
