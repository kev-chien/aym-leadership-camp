import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 42px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 10px 0;
    text-transform: uppercase;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    color: #A17379;
  }
`;

const WeeklyInstructions = ({ week }) => (
  <Container>
    <h2>Week 1: Prayer</h2>
    <h3>Pray for 5 friends throughout the week</h3>
  </Container>
);

export default WeeklyInstructions;
