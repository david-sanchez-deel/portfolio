import React from 'react';
import { Project } from './Project';
import {ReactComponent as MazeIcon} from '../../../assets/maze.svg';

export const FrozenLake = Project({
  backgroundColor: '#ffd861',
  backgroundColorLight: '#ffeeba',
  shadowHoverColor: 'rgba(255, 215, 97, 0.48)',
  icon: <MazeIcon width={"5rem"} style={{ fill: 'rgb(217, 138, 25)' }} />,
  description: ['Reinforcement learning', 'Q-Learning'],
  textColorHover: '#4C5656',
  name: 'Frozen Lake',
  category: 'AI',
  link: 'https://blesfia-frozen-lake.netlify.app/'
})
