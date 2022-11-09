import Router from './routes';
import { ThemeProvider } from './theme';
import { ChartStyles } from './components/Chart';

// ----------------------------------------------------------------------

const App = () => (
  <ThemeProvider>
    <ChartStyles />
    <Router />
  </ThemeProvider>
);

export default App;
