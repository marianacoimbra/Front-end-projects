import React, { Component } from "react";
import { Container } from "./style";
export class Form extends Component {
  render() {
    return (
      <Container>
        <form>
          <input type="text" placeholder="Title"></input>
          <textarea placeholder="Type your note here..." />
          <button>Submit</button>
        </form>
      </Container>
    );
  }
}
