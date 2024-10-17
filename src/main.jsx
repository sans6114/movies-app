import './styles.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { MoviesApp } from './MoviesApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesApp />
  </StrictMode>,
)
