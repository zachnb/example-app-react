import {createBrowserRouter} from "react-router-dom";
import SignUp from "./views/SignUp.jsx";
import Login from "./views/Login.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";

const router = createBrowserRouter(  [

{
    path:'/login',
    element: <Login />
},

{
    path:'/signup',
    element: <SignUp />
},

{
    path:'/users',
    element: <Users />
},

{
    path:'*',
    element: <NotFound />
}

])

export default router;