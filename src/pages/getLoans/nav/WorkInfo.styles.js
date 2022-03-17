import styled from "styled-components"
import { NextButton } from "../components/Form.styles"

export const ButtonWrapper= styled.div`
    display: flex;
    justify-content: flex-end;
    background: #fff;
`
export const BackButton = styled(NextButton)`
    color: gray;
    font-weight: 900;
    border: 2px solid #ccc;
    background: ${props => props.primary ? "#e2e4ec80;" : "white"};
`