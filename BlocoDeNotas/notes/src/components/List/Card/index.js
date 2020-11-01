import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { StyledButton, StyledCard, StyledCardText } from "./style";

export default class CardContainer extends Component {
  render() {
    return (
      <Col>
        <StyledCard body>
          <CardTitle>
            <h3>Title</h3>
          </CardTitle>
          <StyledCardText>
            <p>Note..</p>
          </StyledCardText>
          <StyledButton color="danger">Delete</StyledButton>
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
