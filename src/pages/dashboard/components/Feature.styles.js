import styled from "styled-components";


export const Container = styled.div`
    margin-top: 3rem;
`

export const FeatureContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media screen and (max-width:991px) {
    grid-template-columns: 1fr 1fr 1fr
    }

    @media screen and (max-width: 579px) {
        margin-top: 20px;
        grid-template-columns: 1fr;
    }
`;

export const CardBox = styled.div`
    border-radius: 7px;
    box-shadow: 2px 5px #fff;
    height: 150px;
    background: #fff;

    h3 {
        text-align: center;
        color: #ccc;
    }

    p{
        text-align: center;
        background-color:gray;
        margin-bottom: -1rem;
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