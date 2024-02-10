import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ title, renderHeaderAndFooter, children }) => {
  return (
    <>
      <Helmet>
        <title> {title} </title>
      </Helmet>
      <Header />
      <main> {children} </main>
      {renderHeaderAndFooter && <Footer />}
    </>
  );
};
export default Layout;
