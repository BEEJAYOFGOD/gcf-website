// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
    Sheet,
    // SheetClose,
    SheetContent,
    // SheetDescription,
    // SheetFooter,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { NavLink } from "react-router-dom";
import gcfPng from "@/assets/gcf.png";

const MobileNav = () => {
    return (
        <div className="lg:hidden  w-full   justify-between flex items-center ">
            <Sheet>
                <SheetTrigger asChild>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="bg-white w-[250px] text-black transition-transform duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left "
                >
                    <NavLink className={"border-b-2 px-2"} to="/">
                        <img
                            src={gcfPng}
                            className="w-24 h-24"
                            alt="gcf logo"
                        />
                    </NavLink>

                    <nav className="flex flex-col gap-3 lg:gap-4  items-start pl-4">
                        <NavLink to="/home"> Home </NavLink>
                        <NavLink to="/about">About us</NavLink>
                        <NavLink to="/contact"> Contact</NavLink>
                        <NavLink to="/whatwedo"> What We do</NavLink>
                        <NavLink to="/media">Media</NavLink>
                    </nav>
                    {/* <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                        </SheetDescription>
                    </SheetHeader> */}
                    <div className="grid flex-1 auto-rows-min gap-6 p-4 px-4">
                        {/* <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">Name</Label>
                            <Input
                                id="sheet-demo-name"
                                defaultValue="Pedro Duarte"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">
                                Username
                            </Label>
                            <Input
                                id="sheet-demo-username"
                                defaultValue="@peduarte"
                            />
                        </div> */}
                    </div>
                    {/* <SheetFooter>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter> */}
                </SheetContent>
            </Sheet>

            <span className="text-xl animate-bounce">
                Global Charity Foundation
            </span>
            <NavLink to="/" className="flex items-center justify-between ">
                <img src={gcfPng} alt="fc logo" className="w-18 h-18" />
            </NavLink>
        </div>
    );
};

export default MobileNav;
