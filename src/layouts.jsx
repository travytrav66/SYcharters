import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import './styles/blocks.css';
import './styles/components.css';
import LayoutsPage from './pages/LayoutsPage';

function LayoutsApp() {
  return <LayoutsPage />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutsApp />
  </StrictMode>
);
