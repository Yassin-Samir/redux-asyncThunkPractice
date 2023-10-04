import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/error";
import Loading from "./components/Loading";
import NotFound from "./Pages/NotFound";
import "swiper/css";
import "swiper/css/pagination";
import "./css/app.css";
import "./css/nav.css";
import "./css/phone.css";
import "./css/todo.css";
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
        element: (
          <Suspense fallback={<Loading />}>
            <Phones />
          </Suspense>
        ),
        errorElement: <Error message={"Something Wrong has happened"} />,
      },
      {
        path: "/todos",
        element: (
          <Suspense fallback={<Loading />}>
            <Todos />
          </Suspense>
        ),
        errorElement: <Error message={"Something Wrong has happened"} />,
      },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);
