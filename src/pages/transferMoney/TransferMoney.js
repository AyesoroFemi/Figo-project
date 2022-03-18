import React from 'react'
import Sidebar from '../../components/sidebar'
import { InfoContent } from '../getLoans/components/RegisterNav.styles'
import { Container, } from "../getLoans/GetLoan.styles"

export const TransferMoney = () => {

  return (
        <Container>
            <Sidebar />
            <InfoContent>
                <h3>Transfer Money</h3>
            </InfoContent>
        </Container>
  )
}