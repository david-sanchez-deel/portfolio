import React from 'react';
import { FrozenLake } from './components';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

export const Projects = () => {
  return (<Container>
    <FrozenLake />
  </Container>);
}
