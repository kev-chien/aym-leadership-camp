import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'


const StyledContainer = styled.div` 
    display: flex;
    flex-direction: flex-column;
    justify-content: space-between;
    width: 388px;
    position: relative;
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

const NameFieldInput = styled.input`
    position: absolute;
    width: 328px;
    height: 41px;
    left: 765px;
    top: 377px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
`;

const nameFieldText = styled.p`
    position: absolute;
    width: 122px;
    height: 21px;
    left: 785px;
    top: 387px;
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #C1C1C1;
`;

const AccomplishmentFieldInput = styled.input`
    position: absolute;
    width: 328px;
    height: 185px;
    left: 765px;
    top: 428px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
`;

const Button = styled.button`
    position: absolute;
    width: 328px;
    height: 39px;
    left: 765px;
    top: 633px;
    background: #578982;
    border-radius: 5px;
`;


const PrayerForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <StyledContainer>
            <StyledHeader>
                Share What You Accomplished
            </StyledHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <NameFieldInput name="name" defaultValue="Name" ref={register({ required: true })} />
                {/* include validation with required or other standard HTML validation rules */}
                <AccomplishmentFieldInput name="accomplishment" defaultValue="What did you do? " ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <Button type="submit" />
            </form>
        </StyledContainer>
    )
}

export default PrayerForm