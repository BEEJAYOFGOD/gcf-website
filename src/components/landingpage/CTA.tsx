import cta_bg from "@/assets/CTA-BG.png";
import { Button } from "../ui/button";

const CTA = () => {
    return (
        <section className="w-full px-8 py-24">
            <div
                className="container mx-auto   bg-cover h-[350px] flex flex-col justify-center items-center bg-right  rounded-3xl space-y-5"
                style={{ backgroundImage: `url(${cta_bg})` }}
            >
                <p className="text-white md:text-5xl text-3xl md:w-4xl text-center">
                    You can contribute to provide a place for children with
                    special needs!
                </p>
                <div className="flex gap-4">
                    <Button className="bg-[#F2C94C]">
                        Join as a Volunteer
                    </Button>
                    <Button className="flex-1 ">Donate</Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
