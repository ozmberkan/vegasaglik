import { Outlet } from "react-router-dom";
import Footer from "~/components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="grid grid-cols-[1fr_min(1440px,94%)] grid-rows-[60px_auto_40px] min-h-screen">
      <div className="col-span-full row-start-1">
        <Navbar />
      </div>
      <div className="col-span-3 row-start-2">
        <Outlet />
      </div>
      <div className="col-span-full row-start-3">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
