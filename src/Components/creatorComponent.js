import React, { Component } from 'react'
import './creator.css'

class Creator extends Component{
    constructor(){
        super()
        this.state={
            yourQuote :"",
            yourName :""
        }
    }

    handleChange = (event) => {
        const { target: { name, value } } = event
        this.setState({ [name]: value })
      }


    render(){
        return(
            <div>
                <div className="creating">
                    <h1>Creator Section</h1>

                    <div className="customise">
                        <textarea name="yourQuote" value={this.state.yourQuote} onChange={this.handleChange} placeholder="let your imagination fly...enter your quote!"></textarea>
                    </div>
                    <form>
                        <input type="text" name="yourName" value={this.state.yourName} onChange={this.handleChange} /><br />
                        <button onClick={() => window.location.reload(false)}>Generate!</button>
                    </form>
                    <h2>{this.state.yourQuote}</h2>
                    <h5>{this.state.yourName}</h5>
                    <img src="https://picsum.photos/300" alt=""></img>
                </div>
            </div>
        )
    }
}



export default Creator;