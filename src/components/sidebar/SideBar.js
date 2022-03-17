import React from "react";
import { FaThLarge } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
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
        <h1>Figo</h1>
      </div>
      <NavWrapper>
        <NavItem
          icon={<FaThLarge size={25} />}
          iconName="Dashboard"
        />
        <NavItem icon={<MdCleanHands size={25} />} iconName="Get Loans" />
        <NavItem icon={<IoIosSend size={25} />} iconName="Transfer Money" />
        <NavItem icon={<FaPiggyBank size={25} />} iconName="Save Money" />
        <NavItem icon={<FaWallet size={25} />} iconName="Wallet" />
        <NavItem icon={<HiShoppingCart size={25} />} iconName="Pay Later" />
      </NavWrapper>
    </Container>
  );
};
