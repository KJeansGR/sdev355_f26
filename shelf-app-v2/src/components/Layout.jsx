import { Outlet } from "react-router";

import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
