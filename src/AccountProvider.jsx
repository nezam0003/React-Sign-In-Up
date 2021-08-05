import React, { useContext, useState } from "react";
import { expandingTransition } from "./components/accountBox/Common";

const AccountContext = React.createContext();

const AccountProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setIsExpanded(true);

    setTimeout(() => {
      setIsExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignUp = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignIn = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };
  return (
    <>
      <AccountContext.Provider
        value={{
          active,
          isExpanded,
          playExpandingAnimation,
          switchToSignIn,
          switchToSignUp,
        }}
      >
        {children}
      </AccountContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AccountContext);
};

export { AccountProvider, AccountContext };
