import "./styles/globals.css";  // make sure this path is correct
import React from "react";

// import { Provider } from "react-redux";
// import { SessionProvider } from "next-auth/react";

import authpage from './authpage';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    <>
      <Component {...pageProps} />
      <authpage />
    </>
    // </SessionProvider>
  );
}

export default MyApp;
