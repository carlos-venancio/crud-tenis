import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import SignIn from './components/Sign_In';
import SignUp from "./components/Sign_up";
import Forget from "./components/Forgot";
import Reset from "./components/Reset"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Favorites from './components/Favorites';
import Profile from './components/ProfilePage';
import Verify from './components/Verify';


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/",
        element: <Home/>,
      },
      {
        path : "/cart",
        element: <Cart/>,
      },
      {
        path : "/favorites",
        element: <Favorites/>,
      },
      {
        path : "/profilepage",
        element: <Profile/>,
      },
      {
        path : "/signup",
        element: <SignUp/>,
      },
      {
        path : "signin",
        element : <SignIn/>,
      },
      {
        path : "reset",
        element : <Reset/>,
      },
      {
        path: "forget",
        element: <Forget/>
      },
      {
        path: "verify",
        element: <Verify/>
      }
    ]
  },

  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
