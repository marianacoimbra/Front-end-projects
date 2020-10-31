import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { StyledButton } from "./style";

export default class CardContainer extends Component {
  render() {
    return (
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle>
              <h3>Title</h3>
            </CardTitle>
            <CardText>
              <p>Note..</p>
            </CardText>
            <StyledButton>Delete</StyledButton>
          </Card>
        </Col>
      </Row>
      // <section>
      //   <header>
      //     <h3>Title</h3>
      //   </header>
      //   <p>Note</p>
      // </section>
    );
  }
}
