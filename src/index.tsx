import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./i18n.js";
import LoginPage from "./pages/LoginPage";
import News from "./pages/News";
import Map from "./pages/Map";
import Wanted from "./pages/Wanted";
import Wiki from "./pages/Wiki";
import Messenger from "./pages/Messenger";
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import VetHelp from "./pages/VetHelp";
import PetStore from "./pages/PetStore";
import PetShelters from "./pages/PetShelters";
import Volunteers from "./pages/Volunteers";
import OtherServices from "./pages/OtherServices";
import Profile from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Error404 from "./pages/Error404";
import { store } from "./store/store";
import { Provider } from "react-redux";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Error404 />,
  },
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
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Suspense fallback="loading">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
    </React.StrictMode>
  );
} else {
  console.error('Root element with id "root" not found in the document.');
}
