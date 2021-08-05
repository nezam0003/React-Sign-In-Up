import React, { useState } from "react";
import { Marginer } from "../marginer";
import { useGlobalContext } from "../../AccountProvider";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";

const SignUp = () => {
  const { switchToSignIn } = useGlobalContext();

  const [userSignUp, setUserSignUp] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, email, password, confirmPassword } = userSignUp;
    if (userName && email && password && confirmPassword) {
      alert("submitted successfully");
      setUserSignUp({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("give proper info");
    }
  };
  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input
            type="text"
            placeholder="full name"
            name="userName"
            value={userSignUp.userName}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="enter email"
            name="email"
            value={userSignUp.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="enter password"
            name="password"
            value={userSignUp.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            value={userSignUp.confirmPassword}
            onChange={handleChange}
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={handleSubmit}>
          Signup
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Already have an account ?</MutedLink>
        <BoldLink href="#" onClick={switchToSignIn}>
          Signin
        </BoldLink>
      </BoxContainer>
    </>
  );
};

export default SignUp;
