import React, { useState } from "react";

import SignForm from "./wievs";

const SignUp = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  const handleInputChange = ({ target: { value } }, fieldName) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSignInButtonClick = () => {
    localStorage.setItem("newUser", JSON.stringify(formData));
  };

  return (
    <SignForm
      firstName={formData.firstName}
      lastName={formData.lastName}
      emailAddress={formData.emailAddress}
      password={formData.password}
      titleText="Sign Up"
      checkboxText="I want to receive inspiration, marketing promotions and updates via email."
      buttonText="SIGN UP"
      linkText="Already have an account? Sign in"
      inputWidthSignUp="145px"
      inputWidth="300px"
      linkMargin="60px"
      contLinksJC="flex-end"
      pathRoute="/sign_in"
      contForInput="flex"
      linkDisplay="none"
      onInputChange={handleInputChange}
      onSignButtonClick={handleSignInButtonClick}
    />
  );
};

export default SignUp;
