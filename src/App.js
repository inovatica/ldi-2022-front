// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { ChartStyles } from './components/chart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ChartStyles />
      <Router />
    </ThemeProvider>
  );
}
