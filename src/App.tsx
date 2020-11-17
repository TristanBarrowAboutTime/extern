import React from 'react';
import { ThemeProvider } from 'styled-components';
import CustomReportsPage from './CustomReportsPage/components/CustomReportsPage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CustomReportsPage />
    </ThemeProvider>
  );
}

export default App;
