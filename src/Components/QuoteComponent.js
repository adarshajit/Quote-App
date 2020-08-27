import React,{Component} from 'react';



class Quote extends Component{

    constructor(){
        super()
        this.state={
            quoteData : [],
            authorData : []

        }
    }

    componentDidMount(){
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          this.setState({quoteData : data.content})
          this.setState({authorData : data.author})
        })
    }


    render(){
        return(
            <div>
                <h1>Quote part</h1>  
                <h2>{this.state.quoteData}</h2>  
                <h3>-{this.state.authorData}</h3>   
            </div>
        )
    }


}


export default Quote





