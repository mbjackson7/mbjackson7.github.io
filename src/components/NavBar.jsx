import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Logo from "./Logo3D";

export default function NavBar() {
  return (
    <div className="h-screen w-[20vmin] min-w-[20vmin] border-r-2 flex flex-col bg-quaternary fixed">
      <Link
        to="/"
        className="max-h-[20vmin] min-h-[20vmin] border-b-2 border-black"
      >
        <Logo className="text-white" />
      </Link>
      <div className="h-full flex flex-col text-center items-center">
        <Link
          to="/projects"
          className="w-full border-b-2 p-2 text-text border-black bg-primary hover:bg-tertiary"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="w-full border-b-2 p-2 text-text border-black bg-primary hover:bg-tertiary"
        >
          Resume
        </Link>
        <Link
          to="/sudoku"
          className="w-full border-b-2 p-2 text-text border-black bg-primary hover:bg-tertiary"
        >
          Sudoku
        </Link>

        <div className="p-2">
          <a href="https://www.linkedin.com/in/morganjackson-68-65-6c-6c-6f/">
            <img
              className="p-2"
              src="https://img.shields.io/badge/LinkedIn-blue?style=round-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/morganjackson-68-65-6c-6c-6f/"
              alt="LinkedIn Link"
            />
          </a>

          <a href="https://github.com/mbjackson7">
            <img
              className="p-2"
              src="https://img.shields.io/github/followers/mbjackson7?label=GitHub&style=social"
              alt="GitHub Link"
            />
          </a>
        </div>

        <footer className="text-black mt-auto justify-end">
          <Link to="/changelog" className="text-black">
            Alpha 2.0.0
          </Link>
        </footer>
      </div>
    </div>
  );
}
