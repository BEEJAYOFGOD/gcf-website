import whatchild from "@/assets/whatwedo.png";
import healthBenefits from "@/assets/health-benefits.png";
import scholarships from "@/assets/scholarships.png";
import familysupport from "@/assets/family-support.png";
import therapy from "@/assets/therapy.png";

const Whatwedo = () => {
    const services = [
        {
            title: "Family support",
            icon: familysupport,
            explanation:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi nulla recusandae rerum sint, ",
        },
        {
            title: "Health benefits",
            icon: healthBenefits,
            explanation:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi nulla recusandae rerum sint, ",
        },
        {
            title: "Scholarships",
            icon: scholarships,
            explanation:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi nulla recusandae rerum sint, ",
        },
        {
            title: "Therapy",
            icon: therapy,
            explanation:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi nulla recusandae rerum sint, ",
        },
    ];
    return (
        <section>
            <div className="container flex md:flex-row flex-col items-start space-y-8 justify-between px-8 md:px-0">
                <div className="flex md:flex-row flex-col">
                    <div className="items-end h-fit md:flex hidden">
                        <hr className="bg-black h-px w-24 mt-2 mr-2 border md border-black " />
                    </div>

                    <div>
                        <p className=" text-left md:text-left after:flex md:after:hidden after:h-px text-2xl after:w-full after:bg-black flex relative flex-col w-fit md:m-0 mx-auto">
                            WHAT WE DO
                        </p>
                        <h3 className="md:text-5xl md:text-left text-center mx-auto md:mx-0 w-fit font-bold md:max-w-lg  md:my-4">
                            Some services we provide for our children
                        </h3>
                        <p className="md:w-xl w-sm mt-8 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quas tempore natus enim voluptates? Iste
                            voluptatibus molestias laboriosam et rem a quisquam
                            amet ipsam culpa quaerat quasi voluptatum similique,
                            vel corrupti.
                        </p>
                        <div className="px-4 border-l space-y-4">
                            {services.map((service) => (
                                <div className="flex  items-start gap-4">
                                    <div className="p-2 rounded-md bg-black w-24 md:w-fit aspect-square">
                                        <img
                                            className="w-full h-full aspect-square"
                                            src={service.icon}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">
                                            {service.title}
                                        </p>
                                        <p className="md:w-md w-fit ">
                                            {service.explanation}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <img
                        className="md:w-md md:ml-auto mt-4 md:m-0"
                        src={whatchild}
                        alt="a child looking up"
                    />
                </div>
            </div>
        </section>
    );
};

export default Whatwedo;
