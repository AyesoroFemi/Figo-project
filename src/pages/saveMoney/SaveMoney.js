import React from 'react'
import Sidebar from '../../components/sidebar'
import { InfoContent } from '../getLoans/components/RegisterNav.styles'
import { Container, } from "../getLoans/GetLoan.styles"

export const SaveMoney = () => {

  return (
        <Container>
            <Sidebar />
            <InfoContent>
                <h3>Save Money</h3>
            </InfoContent>
        </Container>
  )
}