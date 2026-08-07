import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import ProductDetail from "../views/ProductDetail";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Homepage,              
            },

            {
                path: "detail/:id",
                Component: ProductDetail,
            }
        ]
    }
]);
export default router;