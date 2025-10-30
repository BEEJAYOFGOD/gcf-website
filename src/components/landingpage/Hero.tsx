import { Button } from "../ui/button";
import heroBg from "@/assets/HEROGB.png";
import playBtn from "@/assets/playBtn.png";

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundPosition: "cover",
            }}
            className={`border-2 border-black mx-auto bg-cover  h-[calc(100vh-5.0rem)]`}
        >
            <div className="container px-4 pt-48 md:px-0   flex flex-col justify-between md:pt-30 pb-12  min-h-full mx-auto">
                <div className="">
                    <h2 className="md:text-7xl text-6xl md:text-left text-center font-semibold text-secondary leading-auto mb-4  max-w-2xl">
                        Inclusive care for children with special needs
                    </h2>
                    <div className="flex items-center w-full justify-center md:justify-start mt-8 md:mt-0">
                        <Button className="w-fit rounded-sm bg-secondary px-8 text-lg text-black">
                            What we do
                        </Button>
                        <Button className="bg-transparent">
                            <div className="bg-secondary p-2 rounded-full">
                                <img src={playBtn} alt="play-icon" />
                            </div>
                            Play Now
                        </Button>
                    </div>
                </div>

                <div className="flex items-center w-full justify-between gap-3 text-secondary">
                    <span className="text-nowrap">
                        230 children under our care
                    </span>
                    <div className="bg-secondary h-px w-full"></div>
                    <span className="text-nowrap">58 donations collected</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
