import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Circle } from "./Circle";

const Overlay = styled.div`
  width: 118px;
  position: absolute;
  height: 118px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundColor};
  top: 70px;
  left: 50px;
  z-index: 0;
  transition: transform 0.3s ease-out;
`;

const Name = styled.p`
  font-size: 1em;
  color: #4C5656;
  z-index: 1000;
  transition: color 0.3s ease-out;
  margin-top: 1em;
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1000;
  position:absolute;
  bottom: 1em;
`;

const Category = styled.div`
  position:absolute;
  color: black;
  top: 1em;
  right: 1em;
  font-weight: bold;
`;
export const Project = (project) => () => {
  return (
    <Container rel="noopener noreferrer" target="_blank" href={project.link} className="project-container" theme={project}>
      <Overlay className="overlay" theme={project}></Overlay>
      <Circle className="circle" theme={project}>{project.icon}</Circle>
      <Name>{project.name}</Name>
      <Description className="project-description">{project.description.map((d, i) => <div key={i}>{d}</div>)}</Description>
      <Category>{project.category}</Category>
    </Container>
  );
};
