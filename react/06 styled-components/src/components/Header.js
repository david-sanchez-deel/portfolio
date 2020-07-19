import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header`
  background-color: #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: white;
`

const Text = styled.h1`
  font-size: 2rem;
  margin:0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;
export const Header = ({titulo}) => {
  return (<Container>
    <Text>{titulo}</Text>
  </Container>);
}
