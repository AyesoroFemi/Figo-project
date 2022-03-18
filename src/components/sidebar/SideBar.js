import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaPiggyBank } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { NavItem } from "./components/NavItem";

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
        <NavItem icon={<IoIosSend size={25} />} iconName="Transfer Money" />
        <NavItem icon={<FaPiggyBank size={25} />} iconName="Save Money" />
        <NavItem icon={<FaWallet size={25} />} iconName="Wallet" />
        <NavItem icon={<HiShoppingCart size={25} />} iconName="Pay Later" />
      </NavWrapper>
    </Container>
  );
};
