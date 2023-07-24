import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

//add fontwesome icons
library.add(fas, fab)

// APP Import
import App from './App.jsx'
// Pages import
import HomePage from './pages/HomePage.jsx'

// CSS Import
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path='/' element={<App/>}>
        <Route index={true}  path='/' element={<HomePage/>} />
     </Route>
   )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
