import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { StyledButton, StyledCard, StyledCardText } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default class CardContainer extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }
  render() {
    return (
      <Col>
        <StyledCard body>
          <CardTitle>
            <h3>{this.props.title}</h3>
          </CardTitle>
          <StyledCardText>
            <p>{this.props.text}</p>
          </StyledCardText>
          <StyledButton color="danger" onClick={() => this.delete()}>
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: "10px" }} />{" "}
            Delete
          </StyledButton>
        </StyledCard>
      </Col>
      // <section>
      //   <header>
      //     <h3>Title</h3>
      //   </header>
      //   <p>Note</p>
      // </section>
    );
  }
}
