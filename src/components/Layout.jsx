import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
