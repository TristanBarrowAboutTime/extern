import TaskDrilldown from './tasks/TaskDrilldown';
import React, { useState } from 'react';
import FilePath, { PathLink } from './misc/FilePath';

const PATH: PathLink[] = [
  {text: 'Productivity Home', onClick: () => console.log('Home Clicked')},
  {text: 'Job', onClick: () => console.log('Job Clicked')},
  {text: 'Task', onClick: () => console.log('Home Clicked')},
];

function App() {
  return (
    <FilePath 
      path={PATH}
    />
  );
}

export default App;
