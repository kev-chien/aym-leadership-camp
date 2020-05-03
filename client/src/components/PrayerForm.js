import React from 'react'
import styled from 'styled-components'

class PrayerForm extends React.Component {





    render() {
        const StyledContainer = styled.div` 
            display: flex;
            width: 388px;
            height: 392px;
            left: 735px;
            top: 310px;
            background: #FFFFFF;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
            order-radius: 10px;
        `;

        const StyledHeader = styled.h4`
            position: absolute;
            width: 329px;
            height: 26px;
            left: 764px;
            top: 341px;
            font-family: Manrope;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            text-transform: uppercase;
            color: #544244;
        `;


        return (
            <StyledContainer>
                <StyledHeader>Share What You Accomplished</StyledHeader>
            </StyledContainer>

        )
    }
}

export default PrayerForm