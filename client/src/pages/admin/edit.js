import React, { useState } from "react";
import styled from "styled-components";

import theme from "../../components/theme";
import accomplishmentTypes from "../../constants/accomplishmentTypes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 30px;
  width: 388px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 20px ${theme.colors.shadow};
  border-radius: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  div {
    cursor: pointer;
  }
`;

const EditForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  input[type="text"],
  textarea,
  select {
    margin-top: 10px;
    width: 100%;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.background};
    border-radius: 5px;
    padding: 10px 8px;
    font-size: 16px;
    ::placeholder {
      color: ${theme.colors.placeholder};
    }
  }

  select {
    height: 35px;
  }

  input {
    height: 41px;
  }

  textarea {
    flex: 1;
    margin-bottom: 20px;
    resize: none;
  }

  input[type="checkbox"] {
    display: inline-block;
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
`;

const EditView = ({ goal, submitEdit, cancelEdit }) => {
  const defaultState = { ...goal, type: goal.type || "prayer" };
  const [inputs, setInputs] = useState(defaultState);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    try {
      await submitEdit(inputs);
      setInputs(defaultState);
    } catch (error) {
      console.log("failed to submit", error);
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    if (event.target.name === "highlighted") {
      setInputs({ ...inputs, highlighted: event.target.checked });
    } else {
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    }
  };

  return (
    <Container>
      <FlexRow>
        <h4>Editing Goal</h4>
        <div onClick={() => cancelEdit()}>cancel</div>
      </FlexRow>
      <EditForm onSubmit={handleSubmit}>
        <select name="type" value={inputs.type} onChange={handleInputChange}>
          {accomplishmentTypes.map((type, index) => (
            <option key={index} value={type.value}>
              {type.description}
            </option>
          ))}
        </select>
        <FlexRow>
          <label>highlight goal</label>
          <input
            type="checkbox"
            name="highlighted"
            onChange={handleInputChange}
            checked={inputs.highlighted}
          />
        </FlexRow>
        <input
          type="text"
          name="name"
          placeholder="Name (Optional)"
          onChange={handleInputChange}
          value={inputs.name}
        />
        <input
          type="text"
          name="initials"
          placeholder="eg AK"
          onChange={handleInputChange}
          value={inputs.initials}
        />
        <textarea
          name="note"
          placeholder="Any more details? (Optional)"
          onChange={handleInputChange}
          value={inputs.note}
        />
        <button type="submit">SUBMIT EDITS</button>
      </EditForm>
    </Container>
  );
};

export default EditView;
