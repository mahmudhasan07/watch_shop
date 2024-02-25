import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test from './Test.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Test></Test>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}>
  {/* <App></App> */}
  <Test></Test>
</RouterProvider>
  </React.StrictMode>,
)
