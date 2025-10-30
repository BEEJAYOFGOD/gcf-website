import { Link, NavLink } from "react-router-dom";
import gcfPng from "@/assets/gcf.png";

const MainNav = () => {
    return (
        <div className="hidden md:flex justify-between w-full items-center gap-4  ">
            <NavLink className={"flex font-bold text-xl items-center"} to="/">
                <img src={gcfPng} className={"h-16 w-16 -ml-4"} alt="fc logo" />
                <span className="-ml-2">Global Charity Foundation</span>
            </NavLink>

            <nav className="flex items-center  lg:gap-4 gap-4 *:hover:underline">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/Whatwedo"> What We Do </NavLink>
                <NavLink to="/contact"> Media </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
            </nav>

            <Link
                className="bg-black text-[#F5F5DC] rounded-md px-12 py-2 text"
                to="/donate"
            >
                Donate
            </Link>
        </div>
    );
};

export default MainNav;
