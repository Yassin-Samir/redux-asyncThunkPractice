import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
