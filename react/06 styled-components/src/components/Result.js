import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Container = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const Text = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

export const Result = ({ value}) => {
  return (<Container>
    <TransitionGroup
      component="span"
      className="result"
    >
      <CSSTransition
        classNames="result"
        key={value}
        timeout={{ enter: 500, exit: 500 }}
      >
        <Text>You value is: <span>${value}</span></Text>
      </CSSTransition>
    </TransitionGroup>
    </Container>);
}
