import Hero from "@/components/landingpage/Hero";
import About from "@/components/landingpage/AboutUs";
import { InfiniteScroll } from "@/components/carousel";

const LandingPage = () => {
    return (
        <>
            <main className="">
                <div className="w-full h-[calc(100vh-5.0rem)] border-red-500 border-4"></div>
                {/* <Hero /> */}
                <About />
                <InfiniteScroll
                    speed={20}
                    itemCount={10}
                    direction="horizontal"
                    translateMode="items"
                    className="w-full h-56 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-lg border border-purple-200 p-4"
                    renderItem={(index: number) => (
                        <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-lg shadow-md border-2 border-purple-300 p-4">
                            <div className="text-3xl mb-2">🎨</div>
                            <div className="text-xl font-bold text-purple-600">
                                Item {index + 1}
                            </div>
                        </div>
                    )}
                />
            </main>
        </>
    );
};

export default LandingPage;
