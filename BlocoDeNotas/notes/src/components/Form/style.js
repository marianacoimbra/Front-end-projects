import styled from "styled-components";
import { Button } from "reactstrap";

export const Container = styled.div`
  color: white;
  display: flex;

  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
`;

export const FormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding-left: 2em;
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #bd93f9;
  padding: 15px;
`;
