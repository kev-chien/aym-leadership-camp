import React from "react";
import styled from "styled-components";

import { VerseBox, PrayerForm } from "./index";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  div:first-of-type {
    margin-right: 30px;
  }
`;

const FormContainer = () => (
  <StyledDiv>
    <VerseBox />
    <PrayerForm />
  </StyledDiv>
);
export default FormContainer;
