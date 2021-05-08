import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./SigninElements";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const SignIn = (props) => {
  const signinHandler = (e) => {
    e.preventDefault();
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        name: e.target[0].value,
        password: e.target[1].value,
        checker: "hackers",
      }),
    };
    axios
      .post("/signin", requestOptions)
      .then(() => {
        props.onAuthUpdate(e.target[0].value);
        props.history.replace("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">HackerRanker</Icon>
        <FormContent>
          <Form onSubmit={(e) => signinHandler(e)}>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel>Username</FormLabel>
            <FormInput type="text" required></FormInput>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Continue</FormButton>
            <Text to="/signup">Don't have an account?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthUpdate: (username) =>
      dispatch({ type: "USER_UPDATE", username: username }),
  };
};


export default withRouter(connect(null, mapDispatchToProps)(SignIn));
