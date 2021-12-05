import React from "react";
import NavBar from "../components/NavBar";

function PageLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default PageLayout;
