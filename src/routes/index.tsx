import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
// import AboutPage from "../pages/About";
// import NotFoundPage from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
    //   { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path: "*",
    // element: <NotFoundPage />,
  },
]);

export default router;