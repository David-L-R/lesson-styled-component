import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  color: ${(p) => (p.color ? p.color : "white")};

  ${(p) =>
    p.buttonType === "success" &&
    `
        background-color: green; 

        &:hover {
            background-color: yellow;
        }

        &:active {
            border: red 1px solid;
            outline: red 1px solid;
            color: yellow;
        }

        &:focus {
            color: blue;
        }
  `}/* &:hover {
    background-color: red;
  } */
`;

export const Button = ({ children, buttonType, color }) => {
  return (
    <StyledButton buttonType={buttonType} color={color}>
      {children}
    </StyledButton>
  );
};
