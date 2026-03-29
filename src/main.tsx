import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import './reset.css'
import './styles/fonts.css';
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
