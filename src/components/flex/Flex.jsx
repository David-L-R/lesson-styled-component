import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  background-color: pink;
  flex-direction: ${(p) => (p.direction ? p.direction : "column")};
  align-items: ${(p) => (p.align ? p.align : "center")};
  justify-content: ${(p) => (p.justify ? p.justify : "center")};
`;

export const Flex = ({ children, direction, align, justify }) => {
  return (
    <StyledFlex direction={direction} align={align} justify={justify}>
      {children}
    </StyledFlex>
  );
};
