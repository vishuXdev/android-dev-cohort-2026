import React, { use, useEffect, useState } from 'react'
import "./app.css"
function App() {
    const [data, setData] = useState({})
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();

        setData({name, email, password})
    }

    useEffect(()=>{
        console.log(data);
    }, [data])
    
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />   
            <br />
            
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />            
            <br />
            
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <br />

            <button>submit</button>
        </form>
    </>
  )
}

export default App