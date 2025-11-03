import Hero from "@/components/landingpage/Hero";
import About from "@/components/landingpage/AboutUs";
import Whatwedo from "@/components/landingpage/Whatwedo";
import Projects from "@/components/landingpage/Projects";
import Donations from "@/components/landingpage/Donations";
import CTA from "@/components/landingpage/CTA";

const LandingPage = () => {
    return (
        <>
            <main className="">
                {/* <div className="w-full h-dvh border-red-500 border-4"></div> */}
                <Hero />
                <About />
                <Whatwedo />
                <Projects />
                <Donations />
                <CTA />
            </main>
        </>
    );
};

export default LandingPage;
