import React from "react";
import styled from "styled-components";

import accomplishmentTypes from "../constants/accomplishmentTypes";

import theme from "./theme";

const StyledContainer = styled.div`
  position: relative;
  top: 10px;
  text-align: center;
`;

const AccomplishmentTable = ({ accomplishments }) => {
  const types = {};

  accomplishmentTypes.forEach((type) => {
    const filteredAccomplishments = accomplishments.filter(
      (acc) => acc.type === type.value
    );
    types[type.value] = {
      count: filteredAccomplishments.length,
      ...type,
    };
  });

  return (
    <StyledContainer>
      <h1>Element-Wide Goal Progress</h1>
      {Object.keys(types).map((type) => (
        <ProgressBar type={types[type]} />
      ))}
    </StyledContainer>
  );
};

const OuterBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  margin: 10px auto;
  width: 100%;
  max-width: 806px;
  height: 50px;
  border-radius: 50px;

  background: ${theme.colors.burgundy};
  color: white;

  h2 {
    flex: 1;
    z-index: 2;
    text-align: center;

    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
    color: ${theme.colors.fadedPink};
  }
`;

const InnerBar = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;

  width: ${(props) => `calc(${props.width}% - 20px)`};
  height: 30px;
  border-radius: 30px;
  background: ${theme.colors.fadedGreen};
`;

const ProgressBar = ({ type: { count, goal, pbDescription } }) => {
  const minBarWidth = 8;
  let barWidth = (count / goal) * 100;

  if (barWidth < minBarWidth) barWidth = minBarWidth;

  return (
    <OuterBar>
      <h2>
        {count}/{goal} {pbDescription}
      </h2>
      <InnerBar width={barWidth}></InnerBar>
    </OuterBar>
  );
};

export default AccomplishmentTable;
