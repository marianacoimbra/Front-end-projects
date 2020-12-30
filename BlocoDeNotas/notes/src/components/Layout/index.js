import React from "react";

import { Root } from "./styles";
import Header from "../Header";
import { FormContainer } from "../Form";
import List from "../List";
import { Component } from "react";

class Layout extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  newNote(title, text) {
    const newNote = { title, text };
    const newArray = [...this.state.notes, newNote];
    const newState = { notes: newArray };
    this.setState(newState);
  }

  render() {
    return (
      <Root>
        <FormContainer newNote={this.newNote.bind(this)} />
        <List notes={this.state.notes} />
      </Root>
    );
  }
}

export default Layout;
