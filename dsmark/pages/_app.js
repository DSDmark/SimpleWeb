import "../styles/index.scss";
import DefaultLayout from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
