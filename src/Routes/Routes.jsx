import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from '../AppLayout/Applayout'
import Home from '../Pages/Home/Home'
import Foods from '../Pages/Home/HeroSection3/Foods&Drinks/Foods'
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About'
import News from '../Pages/News/News'
import Shop from '../Pages/Shop/Shop'
import SignIn from '../Pages/SignIn/SignIn'
import Register from '../Pages/Register/Register'
import Expert from '../Pages/expert/Expert1'
import Gallery from '../Pages/Gallery/Gallery'
import GoogleLocation from '../Pages/GoogleLocation/GoogleLocation'
import MyAccount from '../Pages/MyAccount/MyAccount'


function Routes() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Applayout/>,
            children:[
                {
                index:true,
                element:<Home/>
                },
                {
                    path:"/Foods",
                    element:<Foods/>
                },
                {
                    path:"/About",
                    element:<About/>
                },
                {
                    path:"/Contact",
                    element:<Contact/>
                },
                {
                    path:"/News",
                    element:<News/>
                },
                {
                    path:"/Shop",
                    element:<Shop/>
                },
                {
                    path:"/SignIn",
                    element:<SignIn/>
                },
                {
                    path:"/Register",
                    element:<Register/>
                },
                {
                    path:"/Expert",
                    element:<Expert/>
                },
                {
                    path:"/Gallery",
                    element:<Gallery/>
                },
                {
                    path:"/GoogleLocation",
                    element:<GoogleLocation/>
                },
                {
                    path:"/MyAccount",
                    element:<MyAccount/>
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default Routes

