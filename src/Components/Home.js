import React from 'react'
import { render } from '@testing-library/react';


function Home() {
    render()
    {
        return(
            <div class="cont">
                    <div class="card">
                        <div class="circle">
                           
                        </div>
                        <div class="content">
                            <p>projects created using the latest tools and services.</p>
                            
                        </div>
                    </div>

                <div class="card">
                    <div class="circle">
                        
                    </div>
                    <div class="content">
                        <p>From promotional flyers to stage backdrops. From printed stuff to social media stuff. From birthday party invitations to corporate advertisements.</p>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Home;