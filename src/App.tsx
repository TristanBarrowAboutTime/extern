import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CustomReportsPage from './CustomReportsPage/components/CustomReportsPage';
import { Themes, themes } from './theme';

function App() {
  const [theme, setThemeTo] = useState(Themes.default);
  return (
    <ThemeProvider theme={{}}>
        <CustomReportsPage />
    </ThemeProvider>
  );
}

export default App;
