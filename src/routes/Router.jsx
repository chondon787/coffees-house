import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";
import Cards from "../components/Cards";
 

 const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch(`../categories.json`),
                children:[
                    
                    {
                        path:'/category/:category',
                        element:<CoffeeCards></CoffeeCards>,
                        loader: ()=> fetch(`../coffees.json`)
                    },
                    {
                        path:'/',
                        element:<CoffeeCards></CoffeeCards>,
                        loader: ()=> fetch(`../coffees.json`)
                    },
                     
                ]
                
            },
            {
                path:'/coffees',
                element: <Coffees></Coffees>,
                loader: ()=> fetch(`../coffees.json`)
                
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
                
            },
        ],
    }
 ])
 export default router