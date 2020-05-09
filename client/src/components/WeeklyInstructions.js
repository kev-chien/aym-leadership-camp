import React from "react";
import styled from "styled-components";

import theme from "./theme";

import { useBreakpoint } from "../providers/BreakpointProvider";

const Container = styled.div`
  margin-top: 42px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: ${(props) => (props.breakpoint === "sm" ? "24px" : "30px")};
    font-weight: 700;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    color: ${theme.colors.burgundy};
  }

  h3 {
    font-size: ${(props) => (props.breakpoint === "sm" ? "20px" : "24px")};
    text-align: center;

    font-weight: 500;
    margin: 0;
    color: ${theme.colors.pink};

    span {
      display: ${(props) => (props.breakpoint === "sm" ? "block" : "inline")};
    }
  }
`;

const WeeklyInstructions = ({ week }) => {
  const { breakpoint } = useBreakpoint();
  return (
    <Container breakpoint={breakpoint}>
      <h2>Week 2: Prayer</h2>
      <h3>
        Engage in 2 acts of care <span>throughout the week</span>
      </h3>
    </Container>
  );
};

export default WeeklyInstructions;
