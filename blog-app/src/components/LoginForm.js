import React, { useState } from 'react'

function LoginForm(props){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [submit, setSubmit] = useState(false)
    const [chybnyUserName, setChybnyUserName] = useState(false)
    const [chybneHeslo, setChybneHeslo] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        setSubmit(true)
        if(userName === "admin" && password === "admin"){
            props.setUser(userName)
            props.login(true);
            props.closeLogIn();
        }
        else if(userName !== "" && password !== ""){
            if(userName !== "admin") setChybnyUserName(true)
            else if(password !== 'admin') setChybneHeslo(true)
        }
        //nejaky ten API call co mi vrati uspesnost prihlasenia
        //uspesny : props.closeLogIn();
        //neuspesny: podla chyby urcim ci je neplatny username alebo heslo
    }
   
    return(
        <div id="loginForm" className="form">
            <label>User name:</label>
            <input 
                type="text"
                placeholder="Enter user name"
                name="userName"
                value = {userName}
                onChange = {event => {
                                        setUserName(event.target.value)
                                        setSubmit(false)
                                        setChybnyUserName(false)
                                    }}
                className = {submit && userName === "" ? "errorInput" : ""}
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
                                        setChybneHeslo(false)
                                    }}
                className = {submit && password === "" ? "errorInput" : ""}
            />
            <p>{submit && (userName === "" || password === "") ? "Zadaj chybajuce udaje!" : chybnyUserName ? "Pouzivatel sa nenasiel!" : chybneHeslo ? "Zadal si zle heslo" : ""}</p>
            <button onClick={handleClick}>Log in</button>
        </div>
    )
}

export default LoginForm