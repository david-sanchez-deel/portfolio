import * as React from 'react';

const colors = {
  ia: { foreground: 'blue', background: 'red'},
};

const initialProjects = [
  {
    id: 'iafl',
    name: 'RL - Frozen Lake',
    category: 'ia',
    colors: colors.ia,
  },{
    id: 'iabj',
    name: 'RL - Black Jack',
    category: 'ia',
    colors: colors.ia,
  }
];

export const ProjectContext = React.createContext({
  projects: [],
});

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = React.useState(initialProjects);

  return (
    <ProjectContext.Provider
      value={{
        projects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
