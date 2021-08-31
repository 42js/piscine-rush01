import React from "react";
import styled from "styled-components";
import axios from "axios";

function LoginPage({ history }) {
  const onLoginHandler = async (e) => {
    e.preventDefault(); // for no refresh
    await axios
      .get("/api/login")
      .then((res) => {
        console.log(res);
        history.push("/join");
      })
      .catch((err) => console.warn(err));
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
