import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
const Works = () => {
    return (

        <section
            id="work"
            className="min-h-screen flex flex-col "
        >
            <AnimatedHeaderSection
                subTitle="Crafting digital experiences with code"
                title="My Work"
                text={`Explore a selection of my projects`}
                textColor="text-black"
                withScrollTrigger={true}
            ></AnimatedHeaderSection>
            <div className="relatie flex flex-col font-light">
                {
                    projects.map((project) => (
                        <div
                            key={project.id}
                            id="project"
                            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
                        >
                            {/* title */}
                            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                                <h2 className="lg:text-[32px] text-[26px] leading-none">
                                    {project.name}
                                </h2>
                                <Icon icon='lucide:arrow-up-right' className="md:size-6 size-5"></Icon>
                            </div>
                            {/* divider */}
                            <div
                                className="w-full h-0.5 bg-black/80"
                            />
                            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                                {project.frameworks.map((framework) => (
                                    <p
                                        key={framework.id}
                                        className="text-black transition-colors duration-500 md:group-hover:text-white"
                                    >
                                        {framework.name}
                                    </p>
                                ))}
                            </div>
                            {/* Mobile preview images */}
                            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
                                <img
                                    src={project.bgImage}
                                    className="object-cover w-full h-full rounded-md brightness-50"
                                />
                                <img src={project.image} className="absolute bg-center px-14 rounded-xl" />
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Works