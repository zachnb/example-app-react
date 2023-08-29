import {createBrowserRouter} from "react-router-dom";
import SignUp from "./views/SignUp.jsx";
import Login from "./views/Login.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx"
import GuestLayout from "./components/GuestLayout.jsx"
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter(  [

{
    path: '/',
    element: <DefaultLayout/>,
    children: [

        {
            path:'/dashboard',
            element: <Dashboard />
        },

        {
            path:'/users',
            element: <Users />
        },
        
    ]
},

{
    path: '/',
    element: <GuestLayout/>,
    children: [

        {
            path:'/login',
            element: <Login />
        },
        
        {
            path:'/signup',
            element: <SignUp />
        },
    ]
},

{
    path:'*',
    element: <NotFound />
}

])

export default router;