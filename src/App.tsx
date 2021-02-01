import React from 'react';
import AppRouter from './components/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();
type AppProps = {}
class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      colors: {
        red: "#9B3E38",
        green: "#85b554",
        lightgreen: "#D9E8CA",
        lightgrey: "#fafaff",
        grey: "#c5c5c5",
        boxshadow: "#c5c5c5"
      },
      fonts: ['Open Sans', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', "Geneva", "Verdana", "sans-serif"],
      fontColors: {
          default: "#5a5a5a"
      },
      fontSizes: {
          small: "1em",
          medium: "2em",
          large: "3em"
      }
    }
  }
  
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={this.state}>
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    );
  }
}

export default App;
