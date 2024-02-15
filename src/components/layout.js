import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ title, renderHeaderAndFooter, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {renderHeaderAndFooter && <Header />}
          <main>{children}</main>
          {renderHeaderAndFooter && <Footer />}
        </>
      )}
    </>
  );
};
export default Layout;
