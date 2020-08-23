import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 1.5rem;
  border-radius: 1rem;
`;

export const HeaderPic = ({ src }) => {
  return (<Image src={src} />)
}
