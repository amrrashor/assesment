import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import MainRoutes from './routes/MainRoutes';
import { Container } from './App.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainRoutes />
      </Container>
    </ThemeProvider>
  )
}

export default App;