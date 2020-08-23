import styled from "styled-components";

export const Circle = styled.div`
width: 131px;
height: 131px;
border-radius: 50%;
background: #fff;
border: 2px solid ${({ theme }) => theme.backgroundColor};
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 1;
transition: all 0.3s ease-out;

&:after {
  content: "";
  width: 118px;
  height: 118px;
  display: block;
  position: absolute;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 50%;
  top: 7px;
  left: 7px;
  transition: opacity 0.3s ease-out;
}

& svg {
z-index: 10000;
transform: translateZ(0);
}
`;
