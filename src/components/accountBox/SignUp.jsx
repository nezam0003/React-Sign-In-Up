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

const SignUp = () => {
  const { switchToSignIn } = useContext(AccountContext);

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input type="text" placeholder="full name" />
          <Input type="email" placeholder="enter email" />
          <Input type="password" placeholder="enter password" />
          <Input type="password" placeholder="confirm password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account ?
          <BoldLink href="#" onClick={switchToSignIn}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
};

export default SignUp;
