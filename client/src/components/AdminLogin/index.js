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
} from "./AdminLoginElements";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const AdminLogin = (props) => {
  const authCheck = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      password: e.target[1].value,
      checker: "admin",
    };
    const requestOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(data),
    };
    axios
      .post("/signin", requestOptions)
      .then((res) => {
        props.onAuthUpdate(e.target[0].value);
        props.history.replace("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <FormWrap>
        <Icon to="/">HackerRanker</Icon>
        <FormContent>
          <Form onSubmit={(e) => authCheck(e)}>
            <FormH1>Access your admin account</FormH1>
            <FormLabel>Email</FormLabel>
            <FormInput type="text" required></FormInput>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Continue</FormButton>
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

export default withRouter(connect(null, mapDispatchToProps)(AdminLogin));
