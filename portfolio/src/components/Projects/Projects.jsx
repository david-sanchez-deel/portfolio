import React from 'react';
import { useContext } from 'react';
import { ProjectContext } from '../../contexts';

export const Projects = () => {
  const { projects} = useContext(ProjectContext);

  return (<article>
    {projects.map(project => <div key={project.id}>Jiji</div>)}
  </article>);
}
