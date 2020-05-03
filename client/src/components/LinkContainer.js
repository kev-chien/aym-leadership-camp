import React from "react";
import styled from "styled-components";

import theme from "./theme";

const Container = styled.div`
  margin-top: 30px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  padding: 10px 20px;
  margin-right: 20px;
  background: ${theme.colors.fadedPink};
  color: ${theme.colors.white};
  border-radius: 30px;

  &&:last-of-type {
    margin-right: 0px;
  }

  &&.ghost {
    background: ${theme.colors.background};
    color: ${theme.colors.burgundy};
  }
`;

const LinkContainer = () => (
  <Container>
    <Button className="ghost">Resources</Button>
    <Button>Prayer Guide</Button>
    <Button>Acts of Love</Button>
    <Button>Spiritual Convo Guide</Button>
  </Container>
);

export default LinkContainer;
