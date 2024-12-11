import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovieProvider } from './MovieContext.jsx'


createRoot(document.getElementById('root')).render(
  <MovieProvider>
    <App />
  </MovieProvider>,
)
