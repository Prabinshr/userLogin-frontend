import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ToastContainer />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
