import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import LoginPage from './pages/LoginPage';
import News from './pages/News';
import Map from './pages/Map';
import Wanted from './pages/Wanted';
import Wiki from './pages/Wiki';
import Messenger from './pages/Messenger';
import Friends from './pages/Friends';
import Groups from './pages/Groups';
import VetHelp from './pages/VetHelp';
import PetStore from './pages/PetStore';
import PetShelters from './pages/PetShelters';
import Volunteers from './pages/Volunteers';
import OtherServices from './pages/OtherServices';
import Profile from './pages/Profile';
import { Dashboard } from './pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "wanted",
        element: <Wanted />,
      },
      {
        path: "wiki",
        element: <Wiki />,
      },
      {
        path: "messenger",
        element: <Messenger />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "vethelp",
        element: <VetHelp />,
      },
      {
        path: "petstore",
        element: <PetStore />,
      },
      {
        path: "petshelters",
        element: <PetShelters />,
      },
      {
        path: "voloutneers",
        element: <Volunteers />,
      },
      {
        path: "otherservices",
        element: <OtherServices />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
