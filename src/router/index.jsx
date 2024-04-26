import Create from "../pages/Create";
import Home from "../pages/Home";
import Layout from "../pages/layouts/Layout";
import Search from "../pages/Search";
import BookDetail from "../pages/BookDetail"
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"/books/:id",
        element: <BookDetail />
      },
      {
        path:"/create",
        element: <Create />
      },
      {
        path:"/search",
        element: <Search />
      }
    ]
  },
]);
export default router;