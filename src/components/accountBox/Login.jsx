import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./AccountContext";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";

const Login = () => {
  const { switchToSignUp } = useContext(AccountContext);
  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input type="email" placeholder="enter email" />
          <Input type="password" placeholder="enter password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password ?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an account ?{" "}
          <BoldLink href="#" onClick={switchToSignUp}>
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
};

export default Login;
