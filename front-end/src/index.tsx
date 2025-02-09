import { createRoot } from 'react-dom/client'
import './app/styles/index.css'
import App from './app/index.tsx';
import { StrictMode } from 'react';

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>
)
