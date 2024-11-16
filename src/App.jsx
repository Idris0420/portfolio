import Nav from "./Nav"
import sung from './assets/sung.jpg'

import SkillCard from "./SkillCard";

import { FaHtml5, FaCss3Alt, FaReact, FaNode,  } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

function App() {

  const WebTech = [
    { icon: FaHtml5, label: 'HTML' },
    { icon: FaCss3Alt, label: 'CSS' },
    { icon: IoLogoJavascript, label: 'JavaScript' },
    { icon: RiTailwindCssFill, label: 'Tailwind' },
    { icon: FaReact, label: 'React' },
    { icon: FaNode, label: 'Node' },
    { icon: SiExpress, label: 'Express'},
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiMysql, label: 'MySQL' } 
  ];

  return (
    <>
    <Nav/>
    <div className="md:h-[100vh] h-[90vh] flex text-center items-center justify-center h-[72vh] sm:pt-[10vh] md:pt-[0] pt-[20vh]">
      <div className="md:text-4xl text-3xl font-medium flex flex-col items-center">
        <p>Hello! I'm </p>
        <h1 className="text-4xl font-extrabold md:text-4xl">Ian Montances</h1>
        <div>I am a <p className="inline">Full Stack Web Developer</p> </div>
        <button className="bg-[#5848D8] mt-5 py-2 px-4 font-normal border-2 md:border-[3px] transition-transform duration-300 hover:scale-110 border-white text-lg">Download CV</button>
      </div>
    </div>
    <div id="aboutMe" className=" h-[100vh] flex flex-col justify-center items-center gap-12">
    <h1 className="h1s">About me</h1>
    <img className="w-[55vw] max-w-[300px] aspect-[1/1] " src={sung} alt="" />
    <p className="w-[70vw] max-w-[500px]">Hi! I'm a 19-year-old developer from the Philippines with an enthusiasm for developing dynamic web applications. My area of expertise lies in the MERN stack: MongoDB, Express.js, React, and Node.js. </p>
    </div>
    <div className=" h-[100vh] pt-[80px] flex justify-start items-center flex-col">
      <h1 id="Skills" className="h1s">Skills</h1>
        <h2 className="h2s text-center my-[25px]">Web Development Technologies</h2>
          <ul className="web-dev-skills flex grid grid-cols-3 px-[25px] gap-3 items-center justify-between  h-[10%]">
            {WebTech.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} label={skill.label} />
            ))}
          </ul>
    </div>
    </>
  )
}

export default App
