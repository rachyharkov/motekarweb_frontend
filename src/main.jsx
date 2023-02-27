import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './pages/Index'
import ErrorPage from './pages/ErrorPage'
import About from './pages/about'
import Home from './pages/home'
import Services from './pages/services'
import Pricing from './pages/pricing'
import Faq from './pages/faq'
import FrequentlyAskedQuestions from './pages/home/partial-section/FrequentlyAskedQuestions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>,
    errorElement: <ErrorPage/>,
    children: [
      // if the path is /home or nothing, then show the Home component
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'services',
        element: <Services/>
      },
      {
        path: 'pricing',
        element: <Pricing/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'faq',
        element: <Faq/>
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
