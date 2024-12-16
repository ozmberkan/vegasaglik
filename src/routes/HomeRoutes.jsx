import Layout from "~/layouts/Layout";
import { roleLoader } from "~/loader/roleLoader";
import About from "~/pages/About/About";
import Doctors from "~/pages/Doctors/Doctors";
import Home from "~/pages/Home/Home";
import Profile from "~/pages/Profile/Profile";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
      loader: () => roleLoader(["user", "admin", "doctor"]),
    },
    { path: "/about", element: <About /> },
    { path: "/doctors", element: <Doctors /> },
  ],
};
