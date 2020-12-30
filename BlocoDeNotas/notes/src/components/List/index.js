import React, { Component } from "react";
import CardContainer from "./Card";
import { Ul, Li } from "./style";

export default class List extends Component {
  render() {
    return (
      <Ul>
        {this.props.notes.map((element, index) => {
          return (
            <Li key={index}>
              <CardContainer title={element.title} text={element.text} />
            </Li>
          );
        })}
      </Ul>
    );
  }
}
