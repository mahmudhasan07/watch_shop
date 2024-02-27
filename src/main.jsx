import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test from './Test.jsx';
import Home from './Home.jsx';
import Slide from './Slide.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    children:[
      {
        path : '/hello',
        element : <Slide></Slide>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}>
  {/* <App></App> */}
  {/* <Test></Test> */}
  <Home></Home>
</RouterProvider>
  </React.StrictMode>,
)
