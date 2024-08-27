import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/home";
import Login from "../layout/login";
import Register from "../layout/register";
import Errorpage from "../pages/errorpage";
import Allitems from "../pages/allitems";
import Itemdetails from "../pages/itemdetails";
import Contacts from "../pages/contacts";
import Businessb from "../pages/businessb";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/items'),

        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:'/allitems',
          element:<Allitems></Allitems>,
          loader: () => fetch('http://localhost:5000/items')
        },
        {
          path:'/items/:id',
            element:<Itemdetails></Itemdetails>,
            loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        },
        {
          path:'/contacts',
          element:<Contacts></Contacts>
      },
      {
        path:'/business',
        element: <Businessb></Businessb>
      },
      ]
    },
  ]);


  export default router;