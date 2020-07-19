import React from 'react';
import styled from '@emotion/styled';
import { pascalCase } from '../helper';

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: white;
  margin-top: 1rem;
`;

export const Overview = ({ overview: {brand, type, model} }) => {
  return (<Container>
    <h2>Overview of your assurance</h2>
    <ul>
      <li>Brand: {pascalCase(brand)}</li>
      <li>Type: {pascalCase(type)}</li>
      <li>Model: {pascalCase(model)}</li>
    </ul>
  </Container>);
}
