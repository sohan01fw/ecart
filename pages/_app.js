import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Component {...pageProps} />
      <div
        className="border-2 border-black mt-96 
             "
      >
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
