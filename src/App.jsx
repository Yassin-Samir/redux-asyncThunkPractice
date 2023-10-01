import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/error";
import "swiper/css";
import "swiper/css/pagination";
import "./css/app.css";
import "./css/nav.css";
import "./css/phone.css";
import "./css/index.css";

const Todos = lazy(() => import("./Pages/Todos"));
const Phones = lazy(() => import("./Pages/Phones"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        errorElement: <Error />,
      },
      {
        path: "/todos",
        element: <Todos />,
        errorElement: <Error />,
      },
    ],
  },
]);
