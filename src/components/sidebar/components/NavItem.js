import React from 'react'

import { Container, IconWrapper } from "./NavItem.styles"

export const NavItem = ({icon, iconName, primary}) => {
  return (
    <Container primary={primary}>
        <IconWrapper>{icon}</IconWrapper>
        <div>{iconName}</div>
    </Container>
  )
}