import styled from "styled-components";

import { BackButton } from "./WorkInfo.styles";
// import { FormInput } from "../components/Form.styles" 

export const ButtonElement = styled(BackButton)`
  background: ${(props) => (props.primary ? "rgb(94, 168, 94)" : "white")};
  color: ${(props) => (props.primary ? "white" : "gray")};
`;

export const Wrapper = styled.div`
    transform: translateY(8.7rem);
`;