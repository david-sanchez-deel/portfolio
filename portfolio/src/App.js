import React from 'react';
import { Header, Projects } from './components';
import { ProjectProvider } from './contexts';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectProvider>
      <Projects />
      </ProjectProvider>
    </div>
  );
}

export default App;
