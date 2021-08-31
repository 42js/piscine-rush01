import React from "react";
import styled from "styled-components";

function LoginPage({ history }) {
  const onLoginHandler = (e) => {
    e.preventDefault(); // for no refresh
    try {
      history.push("/api/login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <LoginPageStyled>
      <LoginForm>
        <button type="button" onClick={onLoginHandler}>
          Intra Login
        </button>
      </LoginForm>
    </LoginPageStyled>
  );
}

export const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LoginForm = styled.form`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 300px;
    margin-top: 150px;
    text-align: center;
    border: 2px solid #ddd;
    border-radius: 20px;
    padding: 10px 50px;
    font-size: 25px;
    letter-spacing: 0.09em;
    font-weight: 600;
    :hover {
      background-color: #ddd;
      color: #343a3f;
  }
`;

export default LoginPage;
