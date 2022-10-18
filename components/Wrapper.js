import Navigation from "./Navigation";
import Footer from "./Footer";
import Head from "next/head";

const Wrapper = (props) => (
  <div>
    <Head>
      <title>Talento FC</title>
    </Head>
    <Navigation />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Wrapper;
