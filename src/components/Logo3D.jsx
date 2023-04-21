import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <div className={`${props.className} h-full w-full flex flex-col justify-center items-center bg-secondary hover:bg-tertiary`}>
      <Link to="/" className="h-full w-full grid grid-cols-7 grid-rows-7 text-[1.8vmin] text-center font-bold">
        <p className="col-start-2 row-start-2 spinner">M</p>
        <p className="col-start-2 row-start-3 spinner anim-delay-100">O</p>
        <p className="col-start-2 row-start-4 spinner anim-delay-200">R</p>
        <p className="col-start-2 row-start-5 spinner anim-delay-300">G</p>
        <p className="col-start-2 row-start-6 spinner anim-delay-400">A</p>
        <p className="col-start-2 row-start-7 spinner anim-delay-500">N</p>
        <p className="col-start-1 row-start-6 spinner anim-delay-300">J</p>
        <p className="col-start-3 row-start-6 spinner anim-delay-500">C</p>
        <p className="col-start-4 row-start-6 spinner anim-delay-600">K</p>
        <p className="col-start-5 row-start-6 spinner anim-delay-700">S</p>
        <p className="col-start-6 row-start-6 spinner anim-delay-800">O</p>
        <p className="col-start-7 row-start-6 spinner anim-delay-900">N</p>
        <p className="col-start-3 row-start-2 spinner anim-delay-100">O</p>
        <p className="col-start-4 row-start-2 spinner anim-delay-200">R</p>
        <p className="col-start-5 row-start-2 spinner anim-delay-300">G</p>
        <p className="col-start-6 row-start-2 spinner anim-delay-400">A</p>
        <p className="col-start-7 row-start-2 spinner anim-delay-500">N</p>
        <p className="col-start-6 row-start-1 spinner anim-delay-300">J</p>
        <p className="col-start-6 row-start-3 spinner anim-delay-500">C</p>
        <p className="col-start-6 row-start-4 spinner anim-delay-600">K</p>
        <p className="col-start-6 row-start-5 spinner anim-delay-700">S</p>
        <p className="col-start-6 row-start-7 spinner anim-delay-900">N</p>
      </Link>
    </div>
  );
}
