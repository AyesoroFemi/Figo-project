import styled from "styled-components"

export const FormContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 50px;
   margin-top: 2rem;
`

export const FormInput = styled.div`
    color: #c4c4c4;

    label span{
        margin-right: 1rem;
    }
    input, textarea {
        width: 100%;
        padding: 20px 0;
        border: 2px solid #ccc;
        border-radius: 5px;
        text-indent: 14px;
    }
`

export const FormWrapper = styled(FormInput)`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 50px;
`
export const FormSelect = styled(FormWrapper)`
   margin-top: 1rem;
   gap: 20px;
`
export const FormDate = styled.div`
    margin-top: 1rem;
`
export const Button = styled.button`
    width: 100%;
    padding: 20px 0;
    border: 2px solid #ccc;
    border-radius: 7px;
    background: rgb(94, 168, 94);
    border: none;
    color: #fff;
    font-weight: 700;
`
export const StyledButton = styled(Button)`
   transform: translateY(1.5rem);
   background-color: #fff;
   color: gray;
   border: 2px solid #ccc;
`
export const NextButton = styled(Button)`
   margin-top: 3rem;
   width: 20%;
   cursor: pointer;
`