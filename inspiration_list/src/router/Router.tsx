import { createBrowserRouter } from "react-router";
import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { Add } from "../pages/Add";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
    {path: "/",
    element:<Layout />,
    errorElement: <NotFound />,
    children: [{
        path:"/",
        element: <Home />
    },
    {
        path:"/add",
        element: <Add />
    }]
    }
])