import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react'

import App from './App'

import './App.css'

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
 