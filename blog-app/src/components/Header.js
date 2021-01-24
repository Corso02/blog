import React, { useState } from 'react'
import "../style/header.css"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

function Header(){

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [logInFormOpened, setLogInFormOpened] = useState(false)
    const [registerFormOpened, setRegisterFormOpened] = useState(false)
    const [loggedUser, setLoggedUser] = useState("");

    const openLogInForm = () => {
        setRegisterFormOpened(false)
        setLogInFormOpened(prevState => !prevState)
        console.log(logInFormOpened)
    }

    const openRegisterForm = () =>{
        setLogInFormOpened(false)
        setRegisterFormOpened(prevState => !prevState)
    }
    const logOut = () =>{
        setIsLoggedIn(false)
    }


    return(
        <header>
            <h1>My blog</h1>
            <a onClick={isLoggedIn ? "" : openLogInForm}>{isLoggedIn ? loggedUser: "Log in"}</a>
            <a onClick={isLoggedIn ?  logOut : openRegisterForm }>{isLoggedIn ? "Log out" : "Register"}</a>
            {logInFormOpened ? <LoginForm closeLogIn = {openLogInForm} login = {setIsLoggedIn} setUser = {setLoggedUser}/> : registerFormOpened ? <RegisterForm /> : ""}
        </header>
    )
}

export default Header