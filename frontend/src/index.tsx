import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/app';

// Render your React component instead
const div = document.getElementById('root')!;
const root = createRoot(div);
root.render(<App />);
