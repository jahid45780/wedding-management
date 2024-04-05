import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/PageError/Error';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Blog from './Components/Home/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Login/Resister/Register';
import AuthProviders from './Components/Providers/AuthProviders';
import EventDetails from './Components/EventCard/EventDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServicePrice from './Components/PrivateRoute/ServicePrice';
import Contact from './Components/PrivateRoute/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('/marry.json')
      },
      {
          path: '/marry/:id',
          element: <PrivateRoute> <EventDetails></EventDetails> </PrivateRoute> ,
          loader:()=>fetch('/marry.json'),
          
      },
      {
         path:'/service',
         element:   <PrivateRoute> <ServicePrice></ServicePrice> </PrivateRoute> 
        
      },
      {
        path:'/contact',
        element:  <PrivateRoute>  <Contact></Contact>  </PrivateRoute>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      
    <RouterProvider router={router} />
    </AuthProviders> 
  </React.StrictMode>,
)
