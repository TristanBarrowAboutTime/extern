import React from 'react';
import ListExplorer from './components/FolderExplorer';
import WorkMaxThemeProvider from './providers/WorkMaxThemeProvider';

function App() {
  return (
      <WorkMaxThemeProvider>
        <ListExplorer />
      </WorkMaxThemeProvider>
  );
}

export default App;
