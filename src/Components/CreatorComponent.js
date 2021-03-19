import React, { Component } from "react";
import { Button } from "reactstrap";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import Header from "./Header";
import "../Styles/creator.css";

class Creator extends Component {
  constructor() {
    this.state = {
      yourQuote: "",
      yourName: "",
    };
  }

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="createPage">
        <Header />
        <div className="creating">
          <br />
          <div className="customise">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Quote</InputGroupText>
              </InputGroupAddon>
              <Input
                name="yourQuote"
                value={this.state.yourQuote}
                onChange={this.handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Author</InputGroupText>
              </InputGroupAddon>
              <Input
                name="yourName"
                value={this.state.yourName}
                onChange={this.handleChange}
              />
            </InputGroup>
            <br />
          </div>

          <Button
            color="success"
            onClick={() => window.location.reload(false)}
            id="btn"
          >
            Generate!
          </Button>
          <br />
          <h2 className="myQuote">{this.state.yourQuote}</h2>
          <h5 className="myAuthor">{this.state.yourName}</h5>
          <div className="quotify">
            <img
              src="https://picsum.photos/500/400"
              alt=""
              id="quoteImage"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Creator;
