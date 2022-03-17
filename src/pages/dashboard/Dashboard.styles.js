import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100vh;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width:991px) {
    grid-template-columns: 20% 80%;
    }

    @media screen and (max-width: 579px) {
        margin-top: 20px;
        grid-template-columns: 1fr;
    }
`;

export const DashboardMain = styled.div`
  background: #e2e4ec80;
`;

export const SubMain = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const WalletText = styled.h4`
    margin-top: 5rem;
    font-weight: 700;
`

export const CardElement = styled.div`
    background: rgb(87, 86, 86);
    color: #fff;
    padding: .1rem 1rem;
    border-radius: 8px;
`
export const CardBoxes = styled(CardElement)`
    background-color: #fff;
    color: black;
    height: 200px;
`
export const DigitValue = styled.div`
    font-size: 32px;
    font-weight: bolder;
`

export const BalanceWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-top: -.5rem;

   span{
       margin-right: 10px;
       font-weight: 300;
       font-size: 14px;
   }

`
export const CardText = styled.h5`
    text-align: center;
    color: gray,
    margin-top: 2rem;
    font-weight: 500;

`

export const AccountSession = styled.div`
   display: flex;
   align-items: center;
   margin-top: 2.1rem;
   span{
       margin-right: 10px;
   }
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2628310e;

  a {
    background-color: rgb(94, 168, 94);
    padding: 8px 20px;
    border-radius: 8px;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;

  @media screen and (max-width:991px) {
    grid-template-columns:  2fr 1fr;
    }

    @media screen and (max-width: 579px) {
        margin-top: 20px;
        grid-template-columns: 1fr;
    }
`;

export const IconWrapper = styled.div`
  margin-top: 1rem;
  border-radius: 20px;
  width: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: black;
`;
