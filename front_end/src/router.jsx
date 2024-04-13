import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import StockChart from "./pages/ChartPage";
import { children } from "react";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<HomePage/>

            },
            {
                path:"/signin/",
                element:<SignInPage/>

            },
            {
                path:"/signup/",
                element:<SignUpPage/>
            },
            {
                path:"/chartpage/",
                element:<StockChart />
            },
            {
                path:"*",
                element:<NotFoundPage/>
            }
        ],
        errorElement:<ErrorPage/>


    }
])

export default router;
