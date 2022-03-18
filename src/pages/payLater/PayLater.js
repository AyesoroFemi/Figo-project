import React from 'react'
import Sidebar from '../../components/sidebar'
import { InfoContent } from '../getLoans/components/RegisterNav.styles'
import { Container, } from "../getLoans/GetLoan.styles"

export const PayLater = () => {

  return (
        <Container>
            <Sidebar />
            <InfoContent>
                <h3>Pay Later</h3>
            </InfoContent>
        </Container>
  )
}