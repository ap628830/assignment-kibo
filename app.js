import { createRoot } from 'react-dom/client';
import ProductWrapper from './productWrapper';
import "./styles/product.css";
import "./styles/notification.css";

const root = createRoot(document.getElementById('root'))
root.render(<ProductWrapper></ProductWrapper>)