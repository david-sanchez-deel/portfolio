import React from 'react';
import styled from 'styled-components';
import {HeaderPic} from './HeaderPic';
import {LinkedInIcon} from './LinkedInIcon';

import GHLogo from '../assets/gh.png'

const Container = styled.div`
  height: 4rem;
  display:flex;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
`;
const HeaderText = styled.div`
margin-left: 1rem;
  font-size: 2rem;
`;
const NameText = styled.div`
`;
const Space = styled.div`
  flex-grow: 1;
`;
const IconContainer = styled.div`
margin-left: 1rem;
`;

export const Header = () => {
  return (<Container>
    <HeaderPic src="https://www.gravatar.com/avatar/2b83ecc0fb456258eeddd712a03b0b7b" />
    <HeaderText><span role="img" aria-label="hi">👋</span>!</HeaderText>
    <Space />
    <NameText>David Sánchez</NameText>
    <IconContainer><a href="https://github.com/blesfia" rel="noopener noreferrer" target="_blank"><HeaderPic src={GHLogo} /></a></IconContainer>
    <IconContainer><a href="https://www.linkedin.com/in/blesfia/" rel="noopener noreferrer" target="_blank"><LinkedInIcon /></a></IconContainer>
  </Container>);
}
