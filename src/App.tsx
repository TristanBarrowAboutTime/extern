import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppRouter from './components/AppRouter';
// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{
        colors: {
          active: '#79A949',
          error: '#9B3E38'
        }
      }} >
        <AppRouter />
      </ThemeProvider>
    // </QueryClientProvider>
  );
}

export default App;
