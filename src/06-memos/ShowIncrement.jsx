import React from 'react'

const ShowIncrement = React.memo(({ increment}) => {

    console.log('Me volvi a gnerar')

  return (
    <button
        className='btn btn-primary'
        onClick={() => {
            increment()
        }}
    >
        incrementar
    </button>
  )
})

export default ShowIncrement
