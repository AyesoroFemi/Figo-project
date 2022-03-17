import styled from "styled-components"

export const InfoContent = styled.div`
    border-left: 3px solid #ccc;
    height: 100vh;
    padding-left: 3rem;
    margin-right: 10rem;
    padding-top: 1rem;
`
export const Nav = styled.div`
    margin-top: 3rem;
    margin-left: 5rem;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr;
`
export const NavItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(94, 168, 94);

`
export const NavLine = styled.div`
    width: 116%;
    height:3px;
    transform: translate(-1.4rem, 1.3rem);
    background-color: gray;
`