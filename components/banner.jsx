import Image from "next/image";
import { AiFillFacebook, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import MyProfile from "../public/bim.png";

const Banner = () => {
  return(
  <div className="lg:flex justify-center lg:mt-16">
    <div className="lg:basis-2/3 lg:mt-10">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 dark:text-green-700 text-black font-medium">
          Renzy John Minerva
        </h2>
        <h3 className="text-xl py-2 dark:text-gray-300 text-gray-800">
          Programmer | Web Developer | Music Producer
        </h3>
        <p className="text-md py-2 leading-6 dark:text-gray-400 text-gray-500">
        I am Renzy John Minerva. My passion is coding and designing. Moreover, I am also an aspiring web developer who can make both the front and back-end of a website. Also, I am fond of making applications using Python and Java programming languages. On the other hand, I am also a music producer and one of the artists of Minerva Bros in the genre called EDM.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-2 text-gray-900">
        <AiFillFacebook className="dark:bg-green-700  dark:text-black p-0.1 rounded" />
        <AiFillGithub className=" dark:bg-green-700  dark:text-black p-0.1 rounded" />
        <AiFillYoutube className="bg-gradient-to-br dark:from-green-700 dark:to-green-900 to-blue-400 dark:text-black p-0.1 rounded" />
      </div>
    </div>

    <div className="lg:basis-1/3 mx-auto relative rounded-full w-80 h-80 my-10">
      <Image
        src={MyProfile}
        className="rounded-full bg-gradient-to-br dark:from-green-700 dark:to-black from-green-200 to-blue-400"
        alt="profile"
      />
    </div>
  </div>
  );
};

export default Banner;
