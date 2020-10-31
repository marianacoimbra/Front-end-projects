import React, { Component } from "react";
import CardContainer from "./Card";

export default class List extends Component {
  render() {
    return (
      <ul>
        {Array.of("Job", "Study", "House Cleaning").map((category, index) => {
          return (
            <li key={index}>
              <CardContainer />
            </li>
          );
        })}
      </ul>
    );
  }
}
