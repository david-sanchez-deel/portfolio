import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 3rem;
  border-radius: 1rem;
`;

export const Pic = () => {
  return (<Image src="https://www.gravatar.com/avatar/2b83ecc0fb456258eeddd712a03b0b7b" />)
}
