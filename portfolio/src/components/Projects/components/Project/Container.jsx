import styled from "styled-components";

export const Container = styled.div`
width: 220px;
height: 321px;
background: #fff;
border-top-right-radius: 10px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
box-shadow: 0 14px 26px rgba(0,0,0,0.04);
transition: all 0.3s ease-out;
text-decoration: none;

&:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0,0,0,0.11), 0 24px 46px ${({theme}) => theme.shadowHoverColor};
  cursor: pointer;

  .circle {
    border-color: ${({ theme }) => theme.backgroundColorLight};
    background: ${({ theme }) => theme.backgroundColor};
    &:after {
      background: ${({ theme }) => theme.backgroundColorLight};
    }
  }

  .overlay {
    transform: scale(4) translateZ(0);
  }

  p {
    color: ${({ theme }) => theme.textColorHover};
  }
  .project-description {
    opacity: 1;
  }
}

&:active {
  transform: scale(1) translateZ(0);
  box-shadow: 0 15px 24px rgba(0,0,0,0.11),
    0 15px 24px ${({theme}) => theme.shadowHoverColor};
}
`;
