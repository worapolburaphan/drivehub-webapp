import { lazy } from 'react'
import { RouterProvider, Navigate, createBrowserRouter } from 'react-router-dom'
import defineRouteTitle from './libs/helpers/page-title'
import DefaultLayout from './components/layout/DefaultLayout'

const CarList = lazy(() => import('@/pages/car-management/CarList'))

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
        element: <CarList />,
        loader: defineRouteTitle('Car Management'),
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
