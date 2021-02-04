import React from 'react';
import AppRouter from './components/AppRouter';
import WorkMaxThemeProvider from './providers/WorkMaxThemeProvider';

function App() {
  return (
      <WorkMaxThemeProvider>
        <AppRouter />
      </WorkMaxThemeProvider>
  );
}

export default App;
