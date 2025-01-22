import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './App.jsx'
import CertificateContextProvider from './CertificateContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <CertificateContextProvider>
        <RouterProvider router={AppRouter} />
    </CertificateContextProvider>
)
