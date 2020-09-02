import React from 'react'
import { render } from '@testing-library/react';
import create from '../Assets/create.svg'
import read from '../Assets/read.svg'
import '../Styles/homepage.css'


function Home() {
    render()
        return(
            <div>
            <body id="homepage">
            <div className="cont">
                <a href="/read">
                    <div className="card">
                    <img src ={read} alt="" />
                    </div>
                </a>

                <a href="/create">
                    <div className="card">
                    <img src ={create} alt="" className="create"/>
                    </div>
                </a>
            </div>
            </body>
            </div>
        ) 
}

export default Home;