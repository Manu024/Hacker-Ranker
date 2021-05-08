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
} from "./SignUpElements";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const SignUp = (props) => {
  const signupHandler = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        name: e.target[0].value,
        password: e.target[1].value,
      }),
    };
    axios
      .post("/signup", requestOptions)
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
          <Form onSubmit={(e) => signupHandler(e)}>
            <FormH1>Create your account</FormH1>
            <FormLabel>Username</FormLabel>
            <FormInput type="text" required></FormInput>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Continue</FormButton>
            <Text to="/signin">Existing User?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthUpdate: username => dispatch({type:"USER_UPDATE", username: username}),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(SignUp));
