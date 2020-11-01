import React, { Component } from "react";
import CardContainer from "./Card";
import { Ul, Li } from "./style";

export default class List extends Component {
  render() {
    return (
      <Ul>
        {Array.of(
          "Job",
          "Study",
          "House Cleaning",
          "Singing",
          "Dancing",
          "Games",
          "Programming",
          "Pop",
          "Art"
        ).map((category, index) => {
          return (
            <Li key={index}>
              <CardContainer />
            </Li>
          );
        })}
      </Ul>
    );
  }
}
