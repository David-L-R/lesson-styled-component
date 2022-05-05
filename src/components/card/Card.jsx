import styled from "styled-components";
import { Flex, StyledFlex } from "../flex/Flex";

export const Card = ({ children }) => {
  const StyledCard = styled(StyledFlex)`
    width: 200px;
    height: 200px;
    color: green;
  `;

  return <StyledCard>{children}</StyledCard>;
};
