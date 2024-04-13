import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css';
import 'tailwindcss/tailwind.css';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
