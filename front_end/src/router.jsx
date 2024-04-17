import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage";
import ResearchPage from "./pages/ResearchPage";
import { children } from "react";
import LandingPage from "./pages/LandingPage";
import WatchList from "./pages/WatchListPage";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<LandingPage/>

            },
            {
                path:"/homepage/",
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
                path:"/research/",
                element:<ResearchPage />
            },
            {
                path:"/watch_list/",
                element:<WatchList />
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
