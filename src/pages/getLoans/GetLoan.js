import React from 'react'
import Sidebar from '../../components/sidebar'
import { Forms } from './components/Form'
import { RegisterNav } from './components/RegisterNav'
import { InfoContent } from './components/RegisterNav.styles'
import { Container, } from "./GetLoan.styles"

export const GetLoan = () => {
  return (
    <Container>
        <Sidebar />
        <InfoContent>
             <RegisterNav title="Basic Information" />
             <Forms />
        </InfoContent>
    </Container>
  )
}
 
