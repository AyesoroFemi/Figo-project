import styled from "styled-components";


export const Container = styled.div`
    margin-top: 3rem;
`

export const FeatureContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media screen and (max-width:991px) {
        margin-top: 1.2rem;
        grid-template-columns: 1fr 1fr 1fr
    }

    @media screen and (max-width: 579px) {
        margin: 1.2rem 0;
        grid-template-columns: 1fr;
    }
`;

export const CardBox = styled.div`
    margin: .5rem 0;
    border-radius: 7px;
    box-shadow: 2px 5px #fff;
    height: 7.7rem;
    background: #fff;
    /* border: 3px solid red; */

    h3 {
        margin-top: -0.1px;
        text-align: center;
        color: #ccc;
    }

    p{
        margin-top: -1rem;
        text-align: center;
        background-color:#b8b7b7;
        /* margin-bottom: -1rem; */
        border-bottom-left-radius:7px;
        border-bottom-right-radius:7px;
    }
`

export const Icon = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 15px;
  width: 15px;
  padding: 6px;
  display: flex;
  justify-content: center;
  background-color: #e2e4ec80;
`

export const CardContent = styled.div`
 height: 120px;
`