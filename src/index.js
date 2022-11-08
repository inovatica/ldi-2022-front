import 'simplebar-react/dist/simplebar.min.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//
import App from './App';
import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();
