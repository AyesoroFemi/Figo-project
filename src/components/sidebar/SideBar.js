import React from "react";
import { NavLink } from "react-router-dom";
import { Container, NavWrapper } from "./SideBar.syles";

export const SideBar = () => {

  return (
    <Container>
      <div className="logo">
        <box-icon type='solid' size="50px" color="#5ea85e" name='tennis-ball'></box-icon> 
        <h1>Figo</h1>
      </div>
      <NavWrapper>
        <NavLink
          className="nav"
          to="/"
        >
          <box-icon type='solid' size="30px" name='dashboard'></box-icon>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          className="nav"
          to="/get-loan"
        >
          <box-icon type='solid' size="30px" name='florist'></box-icon>
          <span>Get Loans</span>
        </NavLink>

        <NavLink
          className="nav"
          to="/transfer-money"
        >
          <box-icon type='solid' size="30px" name='send'></box-icon>
          <span>Transfer Money</span>
        </NavLink>

        <NavLink
          className="nav"
          to="/save-money"
        >
            <box-icon name='bank' size="30px" type='solid' ></box-icon>
          <span>Save Money</span>
        </NavLink>
        <NavLink
          className="nav"
          to="/wallet"
        >
          <box-icon name='wallet' size="30px"  type='solid' ></box-icon>
          <span>Wallet</span>
        </NavLink>

        <NavLink
          className="nav"
          to="/pay-later"
        >
          <box-icon name='cart' size="30px" type='solid' ></box-icon>
          <span>Pay Later</span>
        </NavLink>

      </NavWrapper>
    </Container>
  );
};
