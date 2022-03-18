import React from "react";
import { FiToggleLeft } from "react-icons/fi";
import { RiBookFill } from "react-icons/ri";
import { GiBirdTwitter } from "react-icons/gi";
import { CgArrowsExchange } from "react-icons/cg";
import Sidebar from "../../components/sidebar";
import {
  DashboardContainer,
  DashboardMain,
  CardContent,
  CardWrapper,
  IconWrapper,
  SubMain,
  CardElement,
  WalletText,
  CardBoxes,
  DigitValue,
  BalanceWrapper,
  AccountSession,
  CardText,
} from "./Dashboard.styles";
import { Feature } from "./components/Feature";
import { NavLink } from "react-router-dom";
import TransactionHistory from "../../components/transactionHistory";

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />

      <DashboardMain>
         <SubMain>
         <h2>Hello Frank.</h2>
        <CardElement>
          <CardContent>
            <h4>Welcome to your dashboard, please complete your profile</h4>
            <NavLink to="#">Complete Profile</NavLink>
          </CardContent>
        </CardElement>
        <WalletText>Your Wallet</WalletText>
        <CardWrapper>
          <div>
            <CardBoxes>
              <h4>Account balance</h4>
              <DigitValue>0.00</DigitValue>
              <BalanceWrapper>
                <span>Hide balance</span>
                <FiToggleLeft size={20} color="#ccc" />
              </BalanceWrapper>
              <AccountSession>
                <span> Account no: 046758332367 </span>
                <RiBookFill color="black" size={20} />
              </AccountSession>
            </CardBoxes>
          </div>
          <div>
            <CardBoxes>
              <IconWrapper>
                <GiBirdTwitter color="green" size={20} />
              </IconWrapper>
              <CardText>Apply For Loan</CardText>
            </CardBoxes>
          </div>
          <div>
            <CardBoxes>
              <IconWrapper>
                <CgArrowsExchange color="green" size={20} />
              </IconWrapper>
              <CardText>Send Money</CardText>
            </CardBoxes>
          </div>
        </CardWrapper>
        <Feature />
         </SubMain>
      </DashboardMain>
      <TransactionHistory />
    </DashboardContainer>
  );
};
