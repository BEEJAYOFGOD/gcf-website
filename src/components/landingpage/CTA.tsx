import cta_bg from "@/assets/CTA-BG.png";
import { Button } from "../ui/button";

const CTA = () => {
    return (
        <section className="w-full px-8 py-24">
            <div
                className="container mx-auto   bg-cover h-[350px] flex flex-col justify-center items-center bg-right  rounded-3xl space-y-5"
                style={{ backgroundImage: `url(${cta_bg})` }}
            >
                <p className="text-white md:text-5xl text-3xl mb-8 w-8/10 md:w-4xl text-center">
                    You can contribute to provide a place for children with
                    special needs!
                </p>
                <div className="flex md:items-center gap-4 md:flex-row flex-col">
                    <Button className="bg-[#F2C94C] md:text-xl text-lg px-8 md:py-8 py-8">
                        Join as a Volunteer
                    </Button>
                    <Button className="flex-1 bg-[#F2C94C] md:text-xl text-lg px-16 md:py-8 py-4">
                        Donate
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
