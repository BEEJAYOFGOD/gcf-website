import Hero from "@/components/landingpage/Hero";
import About from "@/components/landingpage/AboutUs";
import Whatwedo from "@/components/landingpage/Whatwedo";

const LandingPage = () => {
    return (
        <>
            <main className="">
                {/* <div className="w-full h-dvh border-red-500 border-4"></div> */}
                <Hero />
                <About />
                <Whatwedo />
            </main>
        </>
    );
};

export default LandingPage;
