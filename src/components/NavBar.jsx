import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-[20vmin] min-w-[20vmin] border-r-2 flex flex-col">
      <Link to="/" className="bg-secondary">
        <img src={logo} alt="logo" className="border-b-2 border-black"></img>
      </Link>
      <div className="flex flex-col text-center">
        <Link
          to="/projects"
          className="border-b-2 p-2 text-text border-black hover:bg-tertiary hover:text-white"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="border-b-2 p-2 text-text border-black hover:bg-tertiary hover:text-white"
        >
          Resume
        
        </Link>

        <div className="">
          <a href="https://www.linkedin.com/in/morganjackson-68-65-6c-6c-6f/">
            <img src="https://img.shields.io/badge/LinkedIn-blue?style=round-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/morganjackson-68-65-6c-6c-6f/" alt="LinkedIn Link"/>
          </a>

          <a href="https://github.com/mbjackson7">
            <img src="https://img.shields.io/github/followers/mbjackson7?label=GitHub&style=social" alt="GitHub Link"/>
          </a>
        </div>

        <footer className="">
          <Link to="/changelog" style={{ color: "#FFF", textDecoration: "none" }}>
            Alpha 1.1.1
          </Link>
        </footer>
      </div>
    </div>
  );
}
