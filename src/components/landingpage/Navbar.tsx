import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <header className="sticky h-20 flex items-center top-0 w-full border-b  mx-auto bg-secondary ">
            <div className="container mx-auto  flex p-2">
                {/* Desktop */}
                <MainNav />

                {/* Mobile */}

                <MobileNav />

                {/* Desktop & Mobile */}
            </div>
        </header>
    );
};

export default Navbar;
