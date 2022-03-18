import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;


  .logo{
    display: flex;
    align-items: center;
    font-family: 'Mukta', sans-serif;
    font-weight: 900;
    gap: .5rem;
    color:  #5ea85e;
  }
`;

export const NavWrapper = styled.div`
  margin-top: 4rem;

  .nav {
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: black;
      padding: 8px 10px;
      border-radius: 8px;
  }
  .nav span{
      margin-left: 1rem;
  }

  .active {
      background: #5ea85e;
  }

`;
