import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputReferencia = useRef();


    const onClick = () => {
        // document.querySelector('input').select();
        inputReferencia.current.select()
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={inputReferencia}
            type="text"
            placeholder='Ingrese su nombre'
            className='form-control' 
        />

        <button 
            className='btn btn-primary mt-2'
            onClick={onClick}
        >
            Set Focus
        </button>
    
    </>
  )
}

export default FocusScreen
