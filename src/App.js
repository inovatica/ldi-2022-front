// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { ChartStyles } from './components/Chart';

// ----------------------------------------------------------------------

const App = () => (
    <ThemeProvider>
      <ChartStyles />
      <Router />
    </ThemeProvider>
  );

export default App;
