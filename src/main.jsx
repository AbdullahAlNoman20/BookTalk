import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import ListedBooks from './ListedBooks.jsx';
import PageToRead from './PageToRead.jsx';
import ErrorElement from './Components/ErrorElement.jsx';
import BookDetails from './Components/BookDetails.jsx';
import Offers from './Components/Offers.jsx';
import TermsAndConditions from './Components/TermsAndConditions.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch('./books.json')
      },
      {
        path:'/read',
        element:<PageToRead></PageToRead>
      },
      {
        path:'/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('./books.json')
      },
      {
        path:'/offers',
        element:<Offers></Offers>,
        loader: () => fetch('./offer.json')
      },
      {
        path:'/terms',
        element:<TermsAndConditions></TermsAndConditions>
      }
    ]
  },
]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
