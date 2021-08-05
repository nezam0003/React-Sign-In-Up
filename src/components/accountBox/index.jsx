import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { useGlobalContext } from "../../AccountProvider";

import {
  MainContainer,
  TopContainer,
  HeaderContainer,
  HeaderText,
  SmallText,
  InnerContainer,
  BackDrop,
  backdropVariants,
  expandingTransition,
} from "./Common";

const AccountBox = () => {
  const { active, isExpanded } = useGlobalContext();

  return (
    <>
      <MainContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>please sign-in to continue</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>please sign-up to continue</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <Login />}
          {active === "signup" && <SignUp />}
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default AccountBox;
