import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <div className={`${props.className} h-full w-full flex flex-col justify-center bg-secondary hover:bg-tertiary`}>
      <Link to="/" className="h-full w-full grid grid-cols-7 grid-rows-7 text-[1.8vmin] text-center">
        <p className="col-start-2 row-start-2">M</p>
        <p className="col-start-2 row-start-3">O</p>
        <p className="col-start-2 row-start-4">R</p>
        <p className="col-start-2 row-start-5">G</p>
        <p className="col-start-2 row-start-6">A</p>
        <p className="col-start-2 row-start-7">N</p>
        <p className="col-start-1 row-start-6">J</p>
        <p className="col-start-3 row-start-6">C</p>
        <p className="col-start-4 row-start-6">K</p>
        <p className="col-start-5 row-start-6">S</p>
        <p className="col-start-6 row-start-6">O</p>
        <p className="col-start-7 row-start-6">N</p>
        <p className="col-start-3 row-start-2">O</p>
        <p className="col-start-4 row-start-2">R</p>
        <p className="col-start-5 row-start-2">G</p>
        <p className="col-start-6 row-start-2">A</p>
        <p className="col-start-7 row-start-2">N</p>
        <p className="col-start-6 row-start-1">J</p>
        <p className="col-start-6 row-start-3">C</p>
        <p className="col-start-6 row-start-4">K</p>
        <p className="col-start-6 row-start-5">S</p>
        <p className="col-start-6 row-start-7">N</p>
      </Link>
    </div>
  );
}
