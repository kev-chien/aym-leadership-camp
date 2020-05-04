import React from "react";
import styled from "styled-components";

import VerseBackground from "../images/verse-background.jpeg";

import theme from "./theme";

import { useBreakpoint } from "../providers/BreakpointProvider";

const Container = styled.div`
  margin-top: 30px;
  width: 388px;
  height: 392px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & div {
    border-radius: 10px;
  }

  ${(props) =>
    props.breakpoint === "md" &&
    `
    .verse {
      font-size: 20px;
      max-width: 180px;
    }
  `}

  ${(props) =>
    props.breakpoint === "sm" &&
    `
    width: 100%;
    height: auto;

    .image {
      background: ${theme.colors.background};
    }

    .verse {
      font-size: 20px;
      color: ${theme.colors.darkGreen};
      text-align: center;
    }

    .verse.reference {
      display: none;
    }
  `}
`;

const ImageBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${VerseBackground}) no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  z-index: 1;
`;

const ImageFilter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.darkGreen};
  opacity: 0.8;
  z-index: 2;
`;

const VerseText = styled.h3`
  color: ${theme.colors.white};
  max-width: 240px;
  margin: 28px 34px;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 700;
  z-index: 3;
`;

const VerseBox = ({ style }) => {
  const { breakpoint } = useBreakpoint();
  return (
    <Container style={style} breakpoint={breakpoint}>
      <ImageBackground className="image" />
      <ImageFilter className="image" />
      <VerseText className="verse">
        Therefore be imitators of God, as beloved children. And walk in love, as
        Christ loved us
      </VerseText>
      <VerseText className="verse reference">Eph 5:1-2</VerseText>
    </Container>
  );
};

export default VerseBox;
