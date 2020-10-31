import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
  min-height: 100vh;
  background-color: #383a59;
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  background-color: ${(props) => (props.mobile ? "#FFF" : "#F0F0F0")};
  width: 100%;
  padding-bottom: 30px;
`;
