import Hero from "@/components/landingpage/Hero";
import About from "@/components/landingpage/AboutUs";


const LandingPage = () => {
    return (
        <>
            <main className="">
                {/* <div className="w-full h-dvh border-red-500 border-4"></div> */}
                <Hero />
                <About />
            </main>
        </>
    );
};

export default LandingPage;
