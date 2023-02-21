import { createBrowserRouter } from 'react-router-dom'
import Layouts from "../layouts";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />
  }
])
