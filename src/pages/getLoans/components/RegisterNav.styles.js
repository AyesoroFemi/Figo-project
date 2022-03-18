import styled from "styled-components"

export const InfoContent = styled.div`
    border-left: 4px solid #e2e4ec80;
    height: 100vh;
    padding-left: 3rem;
    margin-right: 10rem;
    padding-top: 1rem;

    @media screen and (max-width:991px) {
        padding-left: .5rem;
        margin-right: 1rem;
    }
`
export const Nav = styled.div`
    margin-top: 3rem;
    margin-left: 5rem;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr;

    .step {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: gray;
        z-index:10;
        /* border: 3px solid red; */
    }

    .activeStep{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: green;
    }

    @media screen and (max-width:991px) {
    grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 579px) {
        margin-top: 20px;
        grid-template-columns: 1fr 1fr;
    }
`
export const NavItem = styled.div`
}
`
export const NavLine = styled.div`
    width: 125%;
    height:3px;
    transform: translate(-1.5rem, 1.3rem);
    background-color: gray;

    @media screen and (max-width:991px) {
        display: none;
    }
`