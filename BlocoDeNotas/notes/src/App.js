import React, { Component } from "react";
import { Form } from "./components/Form";
import List from "./components/List";
class App extends Component {
  render() {
    return (
      <section>
        <Form />
        <List />
      </section>
    );
  }
}

export default App;
