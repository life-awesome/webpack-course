import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {LazyAboutPage} from "./pages/about";
import {LazyShopPage} from "./pages/shop";

const root = document.getElementById('root')

if(!root) {
    throw new Error('Root not found')
}

const container = createRoot(root)


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: 'about',
                element: <Suspense fallback={'...loading'}><LazyAboutPage/></Suspense>
            },
            {
                path: 'shop',
                element: <Suspense fallback={'...loading'}><LazyShopPage/></Suspense>
            }
        ]
    },
]);

container.render(<RouterProvider router={router}/>)