import styled from "styled-components"


export const Container = styled.div`
    /* background-color: ${({primary}) => primary? "red" : "blue"} */
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 2rem;
    padding: 8px 0;

    div:nth-of-type(2) {
        margin-top: -10px;
        margin-left: 1rem;

`

export const IconWrapper = styled.div`
    margin-left: 10px;
    
`