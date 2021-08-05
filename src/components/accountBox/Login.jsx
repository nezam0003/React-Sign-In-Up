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

const Login = () => {
  const { switchToSignUp } = useGlobalContext();

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginUser;
    if (email && password) {
      alert("submitted successfully");
      setLoginUser({
        email: "",
        password: "",
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
            type="email"
            placeholder="enter email"
            name="email"
            value={loginUser.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="enter password"
            name="password"
            value={loginUser.password}
            onChange={handleChange}
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password ?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleSubmit}>
          Signin
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Don't have an account ?</MutedLink>
        <BoldLink href="#" onClick={switchToSignUp}>
          Signup
        </BoldLink>
      </BoxContainer>
    </>
  );
};

export default Login;
