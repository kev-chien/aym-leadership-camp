import React from "react";
import styled from "styled-components";
import usePrayerForm from "../CustomHook";

import theme from './theme'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: flex-column;
  justify-content: space-between;
  margin-top: 30px;
  width: 388px;
  height: 392px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 20px ${theme.colors.shadow};
  border-radius: 10px;

  form {
    position: absolute;

    h3 {
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
      color: ${theme.colors.burgundy};
    }

    input[type="text"] {
      width: 328px;
      height: 41px;
      left: 765px;
      top: 377px;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.background};
      box-sizing: border - box;
      border-radius: 5px;
      ::placeholder {
        font-family: Manrope;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: ${theme.colors.placeholder};
      }
    }

    input[type="textarea"] {
      width: 328px;
      height: 185px;
      left: 765px;
      top: 428px;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.background};
      box-sizing: border - box;
      border-radius: 5px;
      ::placeholder {
        font-family: Manrope;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: ${theme.colors.placeholder};
      }
    }

    button {
      width: 28px;
      height: 39px;
      left: 765px;
      top: 633px;
      background: #578982;
      border-radius: 5px;
    }
  }
`;

const PrayerForm = () => {
  //need to figure out this will communicate with server
  const submit = () => {
    alert(`Prayer submitted!
               Name: ${inputs.name}
               Accomplishment: ${inputs.accomplishment} `);
  };

  const { inputs, handleInputChange, handleSubmit } = usePrayerForm(submit);

  return (
    <StyledContainer>
      <h3>Share What You Accomplished</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={inputs.name}
          required
        />
        <input
          type="textarea"
          name="accomplishment"
          placeholder="What did you do?"
          onChange={handleInputChange}
          value={inputs.accomplishment}
          required
        />
        <button type="submit" />
      </form>
    </StyledContainer>
  );
};

export default PrayerForm;
