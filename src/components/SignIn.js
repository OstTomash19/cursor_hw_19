import React, { useState } from "react";

import SignForm from "./wievs";

function SignIn() {
    const [userData, setUserData] = useState({
      emailAddress: '',
      password: '',
    });

    const handleInputChange = ({ target: { value } }, fieldName) => {
      setUserData({ ...userData, [fieldName]: value });
    };

    const handleSignInButtonClick = () => {
      localStorage.setItem("user", JSON.stringify(userData));
    };

  return (
    <SignForm
      emailAddress = {userData.emailAddress}
      password = {userData.password}
      titleText="Sign In"
      checkboxText="Remember me"
      buttonText="SIGN IN"
      linkText="Don`t have an account? Sign up"
      linkDisplay="block"
      inputWidthSignUp="145px"
      inputWidth="300px"
      linkMargin="60px"
      contLinksJC="space-between"
      pathRoute="/sign_up"
      contForInput="none"
      linkDisplay="block"
      onInputChange={handleInputChange}
      onSignButtonClick={handleSignInButtonClick}
    />
  );
}

export default SignIn;
