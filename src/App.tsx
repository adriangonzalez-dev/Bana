import { createBrowserRouter } from 'react-router-dom'
import { Root } from './layouts/Root'
import { Home } from './pages/Home'

const appRouter = createBrowserRouter([
  {
    path: '',
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <div>About</div>
      },
      {
        path: 'contact',
        element: <div>Contact</div>
      },
      {
        path: 'categories',
        element: <div>Categories</div>
      },
      {
        path: 'products',
        element: <div>Todos los productos</div>,
      },
      {
        path: 'product/:id',
        element: <div>Productos por id</div>
      }
    ],
    errorElement: <div>Error</div>
  }
])

export default appRouter
