import React, { Component } from 'react'
import './creator.css'
import {Button} from 'reactstrap'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';



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

                    <br/>
                    <div className="customise">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Quote</InputGroupText>
                            </InputGroupAddon>
                            <Input name="yourQuote" value={this.state.yourQuote} onChange={this.handleChange}/>
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Author</InputGroupText>
                            </InputGroupAddon>
                            <Input name="yourName" value={this.state.yourName} onChange={this.handleChange}/>
                        </InputGroup>
                        <br />
                     
                       
                    </div>
                   
                    <Button color="warning" onClick={() => window.location.reload(false)} id="btn">Generate!</Button>
                    <br/>
                    <h2 className="myQuote">{this.state.yourQuote}</h2>
                    <h5>{this.state.yourName}</h5>
                    <img src="https://picsum.photos/300" alt=""></img>
                </div>
            </div>
        )
    }
}



export default Creator;