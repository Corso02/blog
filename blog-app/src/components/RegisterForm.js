import React, { useState } from 'react'

function RegisterForm(){

    const [userName, setUserName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [formSent, setFormSent] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()
        setFormSent(true)
        //API call needed to register / find out if username is taken etc.
    }
    
    return(
        <div id="registerForm" class="form">
            <label>User name:</label>
            <input 
                type="text"
                placeholder="Enter username"
                value = {userName}
                onChange = { event =>{
                            setUserName(event.target.value)
                            setFormSent(false)
                        }}
                class = {formSent && userName === "" ? "errorInput" : ""}
            />
            <label>E-mail:</label>
            <input 
                type="email"
                placeholder="Enter email"
                value = {mail}
                onChange = {event =>{
                                setMail(event.target.value)
                                setFormSent(false)
                            }}
                class = {formSent && mail === "" ? "errorInput" : ""}
            />
            <label>Password</label>
            <input 
                type="password"
                placeholder="Enter password"
                value = {password}
                onChange = {event =>{
                                setPassword(event.target.value)
                                setFormSent(false)
                            }}
                class = {formSent && password === "" ? "errorInput" : ""}
            />
            <label>Check password</label>
            <input
                type="password"
                placeholder="Enter same password"
                value = {checkPassword}
                onChange = {event =>{
                                setCheckPassword(event.target.value)
                                setFormSent(false)
                            }}
                class = {formSent && checkPassword === "" ? "errorInput" : ""}
            />
            <p>{formSent && (userName === "" || mail === "" || password === "" || checkPassword === "") ? "Dopln chybajuce udaje" : ""}</p>
            <button onClick={handleClick}>Register</button>
        </div>
    )
}

export default RegisterForm