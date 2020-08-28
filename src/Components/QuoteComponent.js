import React,{Component} from 'react';



class Quote extends Component{

    constructor(){
        super()
        this.state={
            quoteData : [],
            authorData : [],
        }
    
    this.refreshPage = this.refreshPage.bind(this)
    }

    componentDidMount(){
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          this.setState({quoteData : data.content})
          this.setState({authorData : data.author})
        })
    }

    refreshPage() {
        window.location.reload(false)
        
    }


    render(){
        return(
            <div>
                <div className="container box"> 
                    <h2>{this.state.quoteData}</h2>  
                    <h3>-{this.state.authorData}</h3>      
                </div>
               
                <button onClick={this.refreshPage} className="btn">next</button>
                
            </div>
        )
    }


}


export default Quote





