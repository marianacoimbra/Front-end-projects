import React, { Component } from "react";
import { Container, FormBox, StyledButton } from "./style";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faClipboard } from "@fortawesome/free-solid-svg-icons";
export class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    this.text = event.target.value;
  }

  _newNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.newNote(this.title, this.text);
  }

  render() {
    return (
      <FormBox>
        <Form onSubmit={this._newNote.bind(this)}>
          <FormGroup>
          <FontAwesomeIcon icon={faClipboard} style={{ marginRight: "10px" }} />
            <Label for="title">The Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Title"
              maxLength={30}
              title="Max Length = 30 caracters"
              onChange={this._handleTitleChange.bind(this)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <FontAwesomeIcon icon={faCoffee} style={{ marginRight: "10px" }} />
            <Label>The Note</Label>
            <Input
              type="textarea"
              placeholder="Type your note here..."
              maxLength={60}
              title="Max Length = 60 caracters"
              onChange={this._handleTextChange.bind(this)}
            ></Input>
          </FormGroup>
          <StyledButton>Submit</StyledButton>
        </Form>
      </FormBox>
    );
  }
}
