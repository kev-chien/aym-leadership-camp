import React from "react";
import styled from "styled-components";

import VerseBackground from "../images/verse-background.jpeg";

const Container = styled.div`
  width: 388px;
  height: 392px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${VerseBackground}) no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  filter: brightness(0.25);
  z-index: -1;
`;

const VerseText = styled.h3`
  color: #fff;
  margin: 28px 34px;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 700;
`;

const VerseBox = ({ style }) => (
  <Container style={style}>
    <ImageBackground />
    <VerseText style={{ maxWidth: "240px" }}>
      Therefore be imitators of God, as beloved children. And walk in love, as
      Christ loved us
    </VerseText>
    <VerseText>Eph 5:1-2</VerseText>
  </Container>
);

export default VerseBox;
