import { Outlet } from "react-router-dom";
import Footer from "../components/landingpage/Footer";
import Navbar from "@/components/landingpage/Navbar";
// import { TailwindIndicator } from "@/components/TailwindIndicator";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

            {/* <TailwindIndicator /> */}
        </>
    );
};

export default RootLayout;
