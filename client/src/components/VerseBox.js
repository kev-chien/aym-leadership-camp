import React from "react";
import styled from "styled-components";

import VerseBackground from "../images/verse-background.jpeg";

import theme from "./theme";

const Container = styled.div`
  width: 388px;
  height: 392px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    border-radius: 10px;
  }
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

const VerseBox = ({ style }) => (
  <Container style={style}>
    <ImageBackground />
    <ImageFilter />
    <VerseText>
      Therefore be imitators of God, as beloved children. And walk in love, as
      Christ loved us
    </VerseText>
    <VerseText>Eph 5:1-2</VerseText>
  </Container>
);

export default VerseBox;
