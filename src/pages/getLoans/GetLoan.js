import React from 'react'
import Sidebar from '../../components/sidebar'
import { Forms } from './components/Form'
import { useState } from 'react'
import { RegisterNav } from './components/RegisterNav'
import { InfoContent } from './components/RegisterNav.styles'
import { Container, } from "./GetLoan.styles"

export const GetLoan = () => {

    const [ step, setStep] = useState(1)

  return (
        <Container>
            <Sidebar />
            <InfoContent>
                <RegisterNav step={step} title="Basic Information" />
                <Forms setStep={setStep} step={step}/>
            </InfoContent>
        </Container>
  )
}
