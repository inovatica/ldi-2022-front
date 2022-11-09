import Router from './routes';
import { ThemeProvider } from './theme';
import { ChartStyles } from './components/Chart';
import { CartProvider } from './providers/Cart';

// ----------------------------------------------------------------------

const App = () => (
  <ThemeProvider>
    <ChartStyles />
    <CartProvider>
      <Router />
    </CartProvider>
  </ThemeProvider>
);

export default App;
