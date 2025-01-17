import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import "./index.css"

const BoxContainer = styled.div`
  width: 320px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #050318;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 265px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  z-index:9;
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(50deg);
  top: -320px;
  left: -120px;
  background: rgb(241, 196, 15);
  background: linear-gradient( 58deg, rgb(0 4 255) 20%, rgb(169 0 255) 100% );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const HeaderImg = styled.img`
  width:60px;
  height:30px;
  margin: 0;
  z-index:99;
  margin-top:80px;
  
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  margin: 0;
  margin-top: 5px;

`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signup");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signup" && (
            <HeaderContainer>
              <HeaderImg src={process.env.PUBLIC_URL + '/iecselogo.png'}/>
              <HeaderText>General Body Meeting</HeaderText>
              <SmallText>Date : 23 November, 2022</SmallText>
              <SmallText>Time : 6:30 PM</SmallText>
              <SmallText>Venue : MV SEMINAR HALL</SmallText> 
            </HeaderContainer>
          )}
          {active === "signin" && (
            <HeaderContainer>
              <HeaderImg src={process.env.PUBLIC_URL + '/iecselogo.png'}/>
              <HeaderText>General Body Meeting</HeaderText>
              <SmallText>Date : 23 November, 2022</SmallText>
              <SmallText>Time : 6:30 PM</SmallText>
              <SmallText>Venue : MV SEMINAR HALL</SmallText> 
            </HeaderContainer>
          )}
          
        </TopContainer>
        <InnerContainer>
          {active === "signup" && <SignupForm />}
          {active === "signin" && <LoginForm />}
          
        </InnerContainer>
        <h4 class="iecse">Made in <span>Manipal</span> with ❤️ by<span> IECSE</span>.</h4>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
