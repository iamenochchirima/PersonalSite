import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, content, children }) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Enoch Chirima",
  content: "Enoch Chirima Portifolio Site",
};

export default Layout;