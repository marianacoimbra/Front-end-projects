import React, { Component } from "react";
import Card from "./Card";

export default class List extends Component {
  render() {
    return (
      <ul>
        {Array.of("Job", "Study", "House Cleaning").map((category, index) => {
          return (
            <li key={index}>
              <Card />
            </li>
          );
        })}
      </ul>
    );
  }
}
