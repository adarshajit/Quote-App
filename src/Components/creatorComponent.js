import React, { Component } from 'react'

class Creator extends Component{
    render(){
        return(

            <div>
               <h1>Creator Section</h1>
               <form>
                   <input type="text-area" width="100px" height="200px"></input>
               </form>
               <img src="https://picsum.photos/200/300" alt=""></img>
              
               <button onClick={() => window.location.reload(false)}>Generate!</button>
            </div>
        )
    }
}



export default Creator;