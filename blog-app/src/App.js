import React from 'react'
import Footer from './components/Footer'
import Header from "./components/Header"
import Main from './components/Main'
import "./style/index.css"

function App(){
    return(
        <div id="app">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App