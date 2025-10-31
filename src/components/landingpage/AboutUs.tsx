import { Button } from "../ui/button";
import AboutPic from "@/assets/landingaboutPic.png";
import { InfiniteScroll } from "../carousel";
import gcfLogo from "@/assets/gcf.png";

const About = () => {
    return (
        <section className="p-4">
            <div className="container flex md:flex-row flex-col  px-4 justify-center ">
                <div className="md:flex hidden">
                    <hr className="bg-black h-px w-24 mt-58 mr-2" />
                </div>
                <div className="flex md:justify-between md:flex-row items-center  gap-4 flex-col flex-1 md:my-12 ">
                    <div>
                        <div className="text-center md:text-left space-y-4">
                            <h3
                                className="after:h-px after:absolute after:bottom-0
                        md:after:hidden after:w-1/2 after:bg-black flex flex-col items-center relative md:block md:text-3xl my-4  text-2xl"
                            >
                                KNOW ABOUT US
                            </h3>
                            <p className="md:text-6xl text-3xl font-bold md:max-w-3xl">
                                We provide a place for
                                <br className="md:flex hidden" /> children with
                                special needs
                            </p>
                            <p className="md:max-w-md mx-auto md:mx-0 md:text-base text-sm">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Laborum illum modi obcaecati
                                suscipit praesentium repudiandae nobis at
                                explicabo vitae quasi minus vero numquam est
                                maxime, eligendi perspiciatis tempora
                                consequatur asperiores?
                            </p>

                            <Button className="bg-[#F2C94C] md:px-24 md:py-8 px-10 py-4 text-lg md:text-2xl">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    <div>
                        <img className="md:w-xl w-full" src={AboutPic} alt="" />
                    </div>
                </div>
            </div>

            <div className="container">
                <InfiniteScroll
                    speed={20}
                    itemCount={10}
                    direction="horizontal"
                    translateMode="items"
                    className="w-full h-56 "
                    renderItem={() => (
                        <div className="w-12 flex items-center gap-2 h-12 ">
                            <img
                                className="w-12 h-12"
                                src={gcfLogo}
                                alt="gcf"
                            />
                            <p className="text-2xl">GCF</p>
                        </div>
                    )}
                />
            </div>
        </section>
    );
};

export default About;
