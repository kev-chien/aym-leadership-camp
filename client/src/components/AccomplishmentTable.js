import React from "react";
import styled from 'styled-components'
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
        color: ${theme.colors.darkGreen}
    }
`

const AccomplishmentTable = ({ accomplishments }) => (
    <StyledContainer>
        <h1>ACCOMPLISHMENTS</h1>
        <h2>{accomplishments.length}/500 prayers!</h2>
    </StyledContainer>
);

export default AccomplishmentTable