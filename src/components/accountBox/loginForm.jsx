import React, { useContext } from "react";
import styled from "styled-components";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Ticket } from "./ticket";
import {Name} from "./signupForm"
import "./loginForm.css"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <h3 className="greeting">Thank you for registering!</h3>
      <Ticket />
    </BoxContainer>
  );
}
