import { createBrowserRouter } from 'react-router-dom'
import Main from "../layouts/main";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  }
])
