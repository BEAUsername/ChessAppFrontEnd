import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/700.css';
import './index.css'
import App from './App.tsx'
import AuthProvider from './context/AuthProvider'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)

// index.html gives an empty room, main.tsx moves App in, and App returns content.