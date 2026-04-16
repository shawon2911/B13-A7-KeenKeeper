import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { router } from './Routes/Routes.jsx'
import { ToastContainer } from 'react-toastify'
import FriendsProvider from './Components/Context/FriendsProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </FriendsProvider>
  </StrictMode>,
)
