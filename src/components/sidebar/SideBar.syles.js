import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;
  background: ${props => props.primary ? "palevioletred" : "white"};
`;

export const NavWrapper = styled.div`
  margin-top: 4rem;
`;
