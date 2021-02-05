import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import "@fontsource/roboto/500.css";
import IconLock from "./../images/padlock.png";

const GlobalContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  background-color: black;
  font-family: "Roboto";
  color: white;
`;

const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  width: 300px;
  align-items: center;
`;

const ContainerForLinks = styled.div`
  width: 300px;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  margin-top: 10px;
`;

const ContainerForInputs = styled.div`
  display: ${(props) => props.display};
  justify-content: space-between;
  width: 300px;
`;
const SignButton = styled.button`
  width: 300px;
  padding: 15px;
  border-radius: 15px;
  background-color: #05f3ee;
  text-align: center;
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 900;
  margin-top: 35px;
  outline: none;
`;
const SignInput = styled.input`
  background-color: transparent;
  padding: 15px;
  border: 1px solid #5f5e5e;
  width: ${(props) => props.width};
  margin-top: 30px;
  box-sizing: border-box;
  font-family: "Roboto";
  color: white;
  outline: none;
`;

const CheckBox = styled.input`
  margin-right: 20px;
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLockImg = styled.img`
  width: 50px;
`;

const SignText = styled.h1`
  margin: 0;
  font-family: "Roboto";
  color: white;
  padding-top: 15px;
  font-weight: 100;
`;

const LabelCheckbox = styled.label`
  color: white;
  font-size: 14px;
`;

const CopyRightText = styled.p`
  font-family: "Roboto";
  font-weight: 100;
  font-size: 12px;
  color: #868a8a;
  margin-top: 40px;
`;

const NewNavLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
  font-size: 11px;
  font-family: "Roboto";
  font-weight: 100;
`;

const NewLink = styled(Link)`
  display: ${(props) => props.display};
  text-decoration: none;
  color: blue;
  font-size: 11px;
  font-family: "Roboto";
  font-weight: 100;
`;

const SignForm = ({
  titleText,
  checkboxText,
  buttonText,
  linkText,
  inputWidthSignUp,
  inputWidth,
  contLinksJC,
  linkDisplay,
  pathRoute,
  contForInput,
  firstName = "",
  lastName = "",
  emailAddress = "",
  password = "",
  onInputChange = () => {},
  onSignButtonClick = () => {}
}) => (
  <GlobalContainer>
    <IconContainer>
      <IconLockImg src={IconLock} alt="" />
    </IconContainer>
    <SignText>{titleText}</SignText>
    <ContainerForInputs display={contForInput}>
      <SignInput
        width={inputWidthSignUp}
        placeholder="First Name*"
        value={firstName}
        onChange={(e) => onInputChange(e, "firstName")}
      />
      <SignInput
        width={inputWidthSignUp}
        placeholder="Last Name*"
        value={lastName}
        onChange={(e) => onInputChange(e, "lastName")}
      />
    </ContainerForInputs>
    <SignInput
      width={inputWidth}
      placeholder="Email Address*"
      value={emailAddress}
      onChange={(e) => onInputChange(e, "emailAddress")}
    />
    <SignInput
      width={inputWidth}
      placeholder="Password*"
      value={password}
      onChange={(e) => onInputChange(e, "password")}
    />
    <ContainerCheckbox>
      <CheckBox id="checking" type="checkbox" />
      <LabelCheckbox htmlFor="checking">{checkboxText}</LabelCheckbox>
    </ContainerCheckbox>
    <SignButton onClick={onSignButtonClick}>{buttonText}</SignButton>
    <ContainerForLinks justifyContent={contLinksJC}>
      <NewLink to="" display={linkDisplay}>
        Forgot password?
      </NewLink>
      <NewNavLink to={pathRoute}>{linkText}</NewNavLink>
    </ContainerForLinks>
    <CopyRightText>
      Copyright &copy; Your Website {new Date().getFullYear()}
    </CopyRightText>
  </GlobalContainer>
);

export default SignForm;
