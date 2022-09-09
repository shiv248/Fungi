import * as React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
/*
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
