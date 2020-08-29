import React from 'react'
import { render } from '@testing-library/react';


function Home() {
    render()
    {
        return(
            <div class="cont">

                <a href="/read">
                    <div class="card">
                        <div class="content">
                        
                        </div>
                    </div>
               
                </a>

                <a href="/create">
                    <div class="card">
                        <div class="content">
                        
                        </div>
                    </div>
                </a>
            </div>
        )
    }   
}

export default Home;