import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Title"></input>
        <textarea placeholder="Type your note here..." />
        <button>Submit</button>
      </form>
    );
  }
}
