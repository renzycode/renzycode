import card from "../public/text_card.jpg";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="py-10">
      <div className="dark:bg-my-dark-blue bg-white p-10 rounded-xl dark:bg-opacity-40 bg-opacity-40">
        <h3 className="text-2xl py-1 dark:text-gray-200 text-gray-800 font-medium">
          Projects
        </h3>
        <p className="text-md py-2 leading-6 dark:text-gray-400 text-gray-600">
          When I was starting out as a{" "}
          <span className="dark:text-my-dark-blue text-blue-500">
            freelance web developer
          </span>
          , I did remote work for companies and created websites for businesses,
          customers, and personal use. Here are the projects I've been working
          on lately.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 lg:basis-1/4 md:basis-1/2 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={card}
            alt="card1"
          />
        </div>
        <div className="basis-1/3 lg:basis-1/4 md:basis-1/2 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={card}
            alt="card2"
          />
        </div>
        <div className="basis-1/3 lg:basis-1/4  flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={card}
            alt="card3"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
