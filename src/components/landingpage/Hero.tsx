import { Button } from "../ui/button";
import heroBg from "@/assets/HEROGB.png";
import playBtn from "@/assets/playBtn.png";

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundPosition: "center",
            }}
            className={`border-2 border-black mx-auto bg-cover  h-[calc(100dvh-5.0rem)]`}
        >
            <div className="container px-4 md:px-8 relative   flex flex-col justify-center md:pt-30 pb-12 h-full mx-auto">
                <div className="">
                    <h2 className="md:text-7xl text-[54px] leading-[1.4] md:text-left text-center font-semibold text-secondary leading-auto mb-4  max-w-2xl">
                        Inclusive care for children with special needs
                    </h2>
                    <div className="flex items-center w-full justify-center md:justify-start mt-8 md:mt-0">
                        <Button className="w-fit rounded-sm bg-secondary px-8 text-lg text-black">
                            What we do
                        </Button>
                        <Button className="bg-transparent text-white cursor-pointer">
                            <div className="animate-ping">
                                <div className="bg-secondary p-2 rounded-full flex justify-center items-center animate-pulse">
                                    <img src={playBtn} alt="play-icon" />
                                </div>
                            </div>
                            Play Now
                        </Button>
                    </div>
                </div>

                <div className="flex items-center w-full px-8 absolute bottom-4 left-0  justify-between gap-3 text-secondary">
                    <span className="text-nowrap md:text-sm  text-xs">
                        230 children under our care
                    </span>
                    <div className="bg-secondary h-px w-full md:text-sm  text-xs"></div>
                    <span className="text-nowrap">58 donations collected</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
