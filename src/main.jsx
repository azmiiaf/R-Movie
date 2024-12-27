import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './Pages/App.jsx';
import DetailMovie from './components/Layout/DetailMovie.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
