import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
