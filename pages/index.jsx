import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import style from "../components/style.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Banner from "../components/banner";
import CodingSkills from "../components/codingskills";
import Projects from "../components/projects";

function BgVideo(props) {
  if (props.theme == "dark") {
    return (
      <video
        autoPlay
        loop
        muted
        src="dark-bg.mp4"
        type="video/mp4"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
        }}
      />
    );
  } else {
    return (
      <video
        autoPlay
        loop
        muted
        src="white-bg.mp4"
        type="video/mp4"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
        }}
      />
    );
  }
}

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className={darkTheme ? "dark" : " "}
      >
        <Head>
        <meta
  name="RenzyCode"
  content=" I am Renzy John Minerva. My passion is coding and designing. Moreover, I am also an aspiring web developer who can make both the front and back-end of a website. Also, I am fond of making applications using Python and Java programming languages. On the other hand, I am also a music producer and one of the artists of Minerva Bros in the genre called EDM."
/>
          <title>Renzy John Minerva</title>
        </Head>
        <BgVideo theme={darkTheme ? "dark" : " "} />

        <main
          className=" dark:bg-black dark:bg-opacity-70 bg-white bg-opacity-80 px-10 lg:px-60 md:px-30 sm:px-5"
          style={{ position: "absolute", top: "0" }}
        >
          <section className="min-h-screen">
            <nav className="py-10 flex justify-between">
              <h1 className="text-black dark:text-white"> RenzyCode</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkTheme(!darkTheme)}
                    className=" dark:text-white cursor-pointer text-black"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r dark:from-my-white-blue dark:to-my-dark-blue from-green-300 to-blue-400 text-white px-4 py-2 rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <Banner />
          </section>

          <CodingSkills />

          <Projects />


        </main>
      </div>
    </>
  );
};

export default Home;
