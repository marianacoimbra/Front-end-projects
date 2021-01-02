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

  deleteNote(index) {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.setState({ notes: notes });
  }

  render() {
    return (
      <Root>
        {/* Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa
        callback */}
        <FormContainer newNote={this.newNote.bind(this)} />
        <List
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)}
        />
      </Root>
    );
  }
}

export default Layout;
