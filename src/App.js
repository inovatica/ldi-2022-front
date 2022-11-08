// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
