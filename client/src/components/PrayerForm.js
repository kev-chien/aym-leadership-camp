import React from "react";
import styled from "styled-components";
import usePrayerForm from "../CustomHook";

import theme from "./theme";

const StyledContainer = styled.div`
  margin-top: 30px;
  padding: 30px;
  width: 388px;
  height: 392px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 20px ${theme.colors.shadow};
  border-radius: 10px;

  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.colors.burgundy};
  }

  form {
    input,
    textarea {
      margin-top: 10px;
      width: 100%;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.background};
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 16px;
      ::placeholder {
        color: ${theme.colors.placeholder};
      }
    }

    input {
      height: 41px;
    }

    textarea {
      height: 185px;
      margin-bottom: 20px;
      resize: none;
    }

    button {
      width: 100%;
      height: 39px;
      background: ${theme.colors.fadedGreen};
      color: ${theme.colors.white};
      font-size: 14px;
      font-weight: 700;
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
      <h3>Share What You Accomplished!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name (Optional)"
          onChange={handleInputChange}
          value={inputs.name}
          required
        />
        <textarea
          name="accomplishment"
          placeholder="What did you do? (Optional)"
          onChange={handleInputChange}
          value={inputs.accomplishment}
          required
        />
        <button type="submit">SUBMIT</button>
      </form>
    </StyledContainer>
  );
};

export default PrayerForm;
