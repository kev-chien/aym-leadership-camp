import React from "react";
import styled from "styled-components";

import accomplishmentTypes from "../constants/accomplishmentTypes";

import theme from "./theme";

const StyledContainer = styled.div`
  position: relative;
  top: 10px;
  text-align: center;

  h2 {
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    color: ${theme.colors.darkGreen};
  }
`;

const AccomplishmentTable = ({ accomplishments }) => {
  const typeCounts = {};

  accomplishmentTypes.forEach((type) => {
    typeCounts[type.value] = accomplishments.filter(
      (acc) => acc.type === type.value
    ).length;
  });

  return (
    <StyledContainer>
      <h1>ACCOMPLISHMENTS</h1>
      <h2>{typeCounts.prayer}/500 prayers!</h2>
      <h2>{typeCounts.care}/200 acts of care!</h2>
      <h2>{typeCounts.share}/100 spiritual conversations!</h2>
    </StyledContainer>
  );
};

export default AccomplishmentTable;
