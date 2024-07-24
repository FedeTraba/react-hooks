import React, { useEffect, useState } from 'react'
import Message from './Message'
import { useForm } from '../hooks/useForm';

const FormWithCustomHook = () => {

    const {formState, onInputChange,onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState

    useEffect( () => {
        // console.log("UseEffect called")
    }, []);

    useEffect( () => {
        // console.log("formState changed")
    }, [formState]);

    useEffect( () => {
        // console.log("Email changed")
    }, [email]);

    

  return (
    <>
        <h1>Formulario with custom hook</h1>
        <hr />

        <input 
            type="text" 
            className="form-control" 
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
             />
    
    <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="email@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
             />

    <input 
                type="password" 
                className="form-control mt-2" 
                placeholder="Constraseña"
                name="password"
                value={password}
                onChange={onInputChange}
                />


    <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>

    </>


    
  )
}

export default FormWithCustomHook
