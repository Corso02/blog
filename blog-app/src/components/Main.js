import React from 'react'
import "../style/main.css"
import LeftNavBar from './LeftNavBar'

function Main(){
    return(
        <main>
            <div id="leftNavBar">
                <LeftNavBar />
            </div>
            <h1>POSTS AREA</h1>
        </main>
    )
}

export default Main