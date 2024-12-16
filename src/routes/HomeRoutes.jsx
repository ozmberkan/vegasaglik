import Layout from "~/layouts/Layout";
import About from "~/pages/About/About";
import Doctors from "~/pages/Doctors/Doctors";
import Home from "~/pages/Home/Home";
import Profile from "~/pages/Profile/Profile";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    { path: "/about", element: <About /> },
    { path: "/doctors", element: <Doctors /> },
  ],
};
