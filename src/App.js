// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { ChartStyles } from './components/Chart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ChartStyles />
      <Router />
    </ThemeProvider>
  );
}
