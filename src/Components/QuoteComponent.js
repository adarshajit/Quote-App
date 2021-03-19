import React, { Component } from "react";
import { Button } from "reactstrap";

class Quote extends Component {
  constructor() {
    this.state = {
      quoteData: [],
      authorData: [],
    };

    this.refreshPage = this.refreshPage.bind(this);
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ quoteData: data.content });
        this.setState({ authorData: data.author });
      });
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="quotePage">
        <div className="container box">
          <h2 className="quoteData">{this.state.quoteData}</h2>
          <h3 className="authorData">-{this.state.authorData}</h3>
        </div>

        <Button color="warning" onClick={this.refreshPage}>
          Next
        </Button>
      </div>
    );
  }
}

export default Quote;
