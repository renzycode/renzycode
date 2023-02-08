import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import style from "../components/style.module.css";
import { AiFillFacebook, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import myimg from "../public/bim.png";
import card from "../public/text_card.jpg";
import Progressbar from "../components/progressbar";
import myskills from "../components/myskills";
import { useState, useEffect } from "react";

function BgVideo(props){
  if(props.theme=="dark"){
    return(
      <video autoPlay loop muted src="dark-bg.mp4" type="video/mp4" 
      style={{ 
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "fixed"
      }}/>
    );
  }else{
    return(
      <video autoPlay loop muted src="white-bg.mp4" type="video/mp4" 
      style={{ 
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "fixed"
      }}/>
    );
  }

}

const Home = () => {

  const [darkTheme,setDarkTheme] = useState(true);


  return (
    <>
    <div
    style={{
      width: "100%",
      height: "100vh"
    }}
    className={darkTheme ? "dark" : " "}>
      <Head>
        <title>Renzy John Minerva</title>
      </Head>
      <BgVideo theme={darkTheme ? "dark" : " "}/>


      <main className=" dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-80 px-10 lg:px-60"
      style={{ 
        position: "absolute",
        top: "0"
       }}>
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between">
            <h1 className="text-black dark:text-white"> RenzyCode</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkTheme(!darkTheme)} className=" dark:text-white cursor-pointer text-black"/>
              </li> 
              <li>
                <a
                  className="bg-gradient-to-r dark:from-green-500 dark:to-green-800 from-green-300 to-blue-400 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 dark:text-green-700 font-medium">
              Renzy John Minerva
            </h2>
            <h3 className="text-xl py-2 dark:text-gray-300 text-gray-800">
              Programmer | Web Developer | Music Producer
            </h3>
            <p className="text-md py-2 leading-6 dark:text-gray-400 text-gray-500">
            I Am Renzy John Minerva, My passion belongs to coding and designing. Moreover, I am also an aspiring Web Developer who can make both front and back-end of a website. Also I am fond of making applications using Python and Java Programming Laguages. On the other hand, I am also a Music Producer and one of the artist of Minerva Bros under the genre called EDM
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-900">
            <AiFillFacebook className="dark:bg-green-700  dark:text-black p-0.1 rounded"/>
            <AiFillGithub className=" dark:bg-green-700  dark:text-black p-0.1 rounded"/>
            <AiFillYoutube className="bg-gradient-to-br dark:from-green-700 dark:to-green-900 to-blue-400 dark:text-black p-0.1 rounded"/>
          </div>
          <div className="mx-auto bg-gradient-to-br dark:from-green-700 dark:to-black from-green-200 to-blue-400 relative rounded-full w-80 h-80 my-10">
            <Image src={myimg} className="rounded-full" />
          </div>
        </section>
        <section className="py-5">
          <div>
            <h3 className="text-2xl py-1 dark:text-gray-300">Coding Skills</h3>
            <p className="text-md py-2 leading-6 dark:text-gray-400 text-gray-600">
            This section is about my <span className="dark:text-green-600 text-blue-500">coding skills</span>, and the progress bar shows how much I've <span className="dark:text-green-600 text-blue-500">learned</span> or <span className="dark:text-green-600 text-blue-500">experienced</span> in that programming language or web technologies.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 bg-white dark:bg-white flex-1">
              {
                myskills.map((data, key) => {
                  return (
                    <Progressbar title={data.name} percent={data.progress} key={key}/>
                  );
                })
              }
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-2xl py-1 dark:text-gray-300">Projects</h3>
            <p className="text-md py-2 leading-6 dark:text-gray-400 text-gray-600">
            When I was starting out as a <span className="dark:text-green-600 text-blue-500">freelance web developer</span>, I did remote work for companies and created websites for businesses, customers, and personal use. Here are the projects I've been working on lately.
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
              />
            </div>
            <div className="basis-1/3 lg:basis-1/4 md:basis-1/2 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={card}
              />
            </div>
            <div className="basis-1/3 lg:basis-1/4  flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={card}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default Home;
