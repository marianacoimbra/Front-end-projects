import React, { Component } from "react";
import { Container, FormBox, StyledButton } from "./style";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
export class FormContainer extends Component {
  render() {
    return (
      <FormBox>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Title"
              maxLength={30}
              title="Max Length = 30 caracters"
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
            ></Input>
          </FormGroup>
          <StyledButton>Submit</StyledButton>
        </Form>
      </FormBox>
    );
  }
}
