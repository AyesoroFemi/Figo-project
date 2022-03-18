import styled from "styled-components";

import { BackButton } from "./WorkInfo.styles";

export const ButtonElement = styled(BackButton)`
  background: ${(props) => (props.primary ? "rgb(94, 168, 94)" : "white")};
  color: ${(props) => (props.primary ? "white" : "gray")};
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   gap: 3rem;
`;