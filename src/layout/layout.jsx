import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HederP from "../components/HederP";

const layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <HederP/>
    </>
  );
};

export default layout;
