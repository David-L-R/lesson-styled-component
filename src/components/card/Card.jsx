import styled from "styled-components";
import { StyledButton } from "../button/Button";

const StyledCard = styled.div`
  ${StyledButton} {
    border: 3px solid green;
  }
`;

export const Card = ({ children }) => {
  return (
    <StyledCard>
      {children} <StyledButton>Hello</StyledButton>
    </StyledCard>
  );
};
