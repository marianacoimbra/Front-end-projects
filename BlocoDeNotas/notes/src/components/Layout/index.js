import React from "react";

import { Root } from "./styles";
import Header from "../Header";
import { FormContainer } from "../Form";
import List from "../List";

function Layout() {
  return (
    <Root>
      <FormContainer />
      <List />
    </Root>
  );
}

export default Layout;
