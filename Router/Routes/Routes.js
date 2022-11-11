import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import AddServices from "../../Pages/Home/Home/Services/AddServices";
import AllServices from "../../Pages/Home/Home/Services/AllServices";
import Services from "../../Pages/Home/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Review from "../../Pages/Orders/Review";
import SignUp from "../../Pages/SignUp/SignUp";
import ServiceDetail from "../../Pages/ViewDetails/ServiceDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },

            { // 3 services path
                path: '/AllServices',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/allServices')
            },

            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            {
                path: '/Review',
                element: <Review></Review>,
                loader: () => fetch('http://localhost:5000/review')
            },

            {
                path: '/myReview',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },

            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*', element: <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-40 border-2">
            <div className="card-body">
                <h2 className="card-title mx-auto text-2xl">404</h2>
                <p className="mx-auto text-xl">OOps!!!</p>
                <p className="mx-auto">You are trying with wrong keyword.
                    Hence , You will never find this route!!!</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Try Again</button>
                </div>
            </div>
        </div>
    }

]);

export default router;