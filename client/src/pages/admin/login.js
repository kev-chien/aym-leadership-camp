import React, { useState } from "react";
import styled from "styled-components";

import theme from "../../components/theme";

const Container = styled.div`
  width: 300px;
  height: auto;
  margin: 100px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${theme.colors.placeholder};
  box-shadow: 0px 0px 20px ${theme.colors.shadow};
  background: ${theme.colors.white};
  border-radius: 8px;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    border-radius: 4px;
    padding: 4px 8px;
    margin-bottom: 16px;
    font-size: 16px;
  }

  &.error input {
    border-color: lightsalmon;
    box-shadow: 0px 0px 6px salmon;
  }

  button {
    font-size: 14px;
    background: ${theme.colors.fadedPink};
    color: ${theme.colors.white};
    border-radius: 4px;
  }
`;

const AdminLoginView = ({ submitLogin }) => {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (pass) => {
    const result = await submitLogin(pass);

    if (!result) {
      setError(true);
      setPass("");
    }
  };

  return (
    <Container className={error ? "error" : ""}>
      <h3>Login to view</h3>
      <form>
        <input
          autoFocus
          type="password"
          value={pass}
          onChange={(event) => {
            setError(false);
            setPass(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit(pass);
            }
          }}
        />
        <button onClick={() => handleSubmit(pass)}>submit</button>
      </form>
    </Container>
  );
};

export default AdminLoginView;
