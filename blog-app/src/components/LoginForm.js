import React, { useState } from 'react'

function LoginForm(props){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [submit, setSubmit] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        setSubmit(true)
        //nejaky ten API call co mi vrati uspesnost prihlasenia
        //uspesny : props.closeLogIn();
        //neuspesny: podla chyby urcim ci je neplatny username alebo heslo
    }
   
    return(
        <div id="loginForm" class="form">
            <label>User name:</label>
            <input 
                type="text"
                placeholder="Enter user name"
                name="userName"
                value = {userName}
                onChange = {event => {
                                        setUserName(event.target.value)
                                        setSubmit(false)
                                    }}
                class = {submit && userName === "" ? "errorInput" : ""}
            />
            <label>Password: </label>
            <input 
                type="password"
                placeholder="Enter your password"
                name="password"
                value = {password}
                onChange = {event => {
                                        setPassword(event.target.value)
                                        setSubmit(false)
                                    }}
                class = {submit && password === "" ? "errorInput" : ""}
            />
            <p>{submit && (userName === "" || password === "") ? "Zadaj chybajuce udaje!" : ""}</p>
            <button onClick={handleClick}>Log in</button>
        </div>
    )
}

export default LoginForm