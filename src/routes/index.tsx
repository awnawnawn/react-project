import { createBrowserRouter } from 'react-router-dom';
import { loader, action } from '../utils';
import Layout from '../layouts';
import Contact from '../pages/contact';
import ErrorPage from '../pages/error-page';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (<Layout />),
    loader: loader,
    action: action,
    children: [
      {
        path: 'contacts/:contactID',
        element: ( <Contact /> ),
        loader: loader
      }
    ],
    errorElement: ( <ErrorPage /> )
  }
]);
