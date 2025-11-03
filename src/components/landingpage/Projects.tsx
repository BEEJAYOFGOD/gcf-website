import awareness from "@/assets/awareness.png";
import weekly_excursion from "@/assets/weekly-excursion.png";
import outdoor_clarity from "@/assets/outdoor-clarity.png";
import { Button } from "../ui/button";

const Projects = () => {
    const projects = [
        {
            title: "Mission smile 1k Outdoor charity",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi nulla recusandae rerum sint",
            img: outdoor_clarity,
        },
        {
            title: "Weekly excursions",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi nulla recusandae rerum sint",
            img: weekly_excursion,
        },
        {
            title: "Monthly public awareness",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi nulla recusandae rerum sint",
            img: awareness,
        },
    ];
    return (
        <section>
            <div className="container px-8 md:px-0 py-8">
                <div className="flex">
                    <div className="items-end h-fit md:flex hidden">
                        <hr className="bg-black h-px w-24 mt-2 mr-2 border md border-black " />
                    </div>
                    <div>
                        <h3 className="text-left md:text-left after:flex md:after:hidden after:h-px text-2xl after:w-full after:bg-black flex relative flex-col w-fit md:m-0 mx-auto">
                            PROJECTS WE DO
                        </h3>
                        <p className="md:text-5xl w-fit text-2xl md:text-left font-bold text-center mt-4 mx-auto md:w-xl">
                            We are creating a place where children with special
                            needs can thrive
                        </p>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-8 mt-8">
                    {projects.map((project) => (
                        <article
                            style={{
                                backgroundImage: `url(${project.img})`,
                                backgroundPosition: "center",
                            }}
                            className="rounded-xl space-y-8 flex flex-col px-12 py-12 relative z-2  justify-between"
                        >
                            <div className="absolute inset-0 h-full w-full bg-black/50 z-1 rounded-xl" />
                            <div className="z-2 ">
                                <p className="text-white text-4xl z-2">
                                    {project.title}
                                </p>
                                <p className="mb-34 text-white z-2">
                                    {project.description}
                                </p>
                            </div>
                            <Button className="w-fit text-black bg-white px-12 py-6 z-2">
                                Learn More
                            </Button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
