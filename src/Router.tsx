import { lazy } from 'react'
import { RouterProvider, Navigate, createBrowserRouter } from 'react-router-dom'
import { defineRouteTitle } from './libs/helpers/route-loader'
import DefaultLayout from './components/layout/DefaultLayout'
import CarManagement from './pages/car-management'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Navigate to='/car-management' />,
      },
      {
        path: 'car-management',
        element: <CarManagement />,
        loader: defineRouteTitle('Car Management'),
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
