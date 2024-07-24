import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Federico',
        email: 'federico@gmail.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

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
        <h1>Formulario simple</h1>
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
            placeholder="federico@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
             />

    {
        (username === 'federico') && <Message/>
    }

    </>

    
  )
}

export default SimpleForm
