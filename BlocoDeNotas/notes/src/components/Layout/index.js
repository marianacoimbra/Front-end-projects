import React from "react";

import { Root } from "./styles";
import Header from "../Header";
import { Form } from "../Form";
import List from "../List";

function Layout() {
  return (
    <Root>
      <Form />
      <List />
    </Root>
  );
}

export default Layout;
