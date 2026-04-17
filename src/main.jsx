import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { Toaster } from 'react-hot-toast'
import { router } from './Routes/Routes.jsx'
import { TimelineProvider } from './context/TimelineContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
          },
        }}
      />
    </TimelineProvider>
  </StrictMode>,
)
