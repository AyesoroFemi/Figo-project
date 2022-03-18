import React from 'react'

import { Container, IconWrapper } from "./NavItem.styles"

export const NavItem = ({icon, iconName}) => {
  return (
    <Container>
        <IconWrapper>{icon}</IconWrapper>
        <div>{iconName}</div>
    </Container>
  )
}