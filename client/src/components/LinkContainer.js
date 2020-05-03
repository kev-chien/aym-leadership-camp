import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  padding: 10px 20px;
  margin-right: 20px;
  background: #bba6a8;
  color: #fff;
  border-radius: 30px;

  &&.ghost {
    background: #fff;
    color: #544244;
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
